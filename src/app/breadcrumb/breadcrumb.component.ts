import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs$: Observable<any>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.breadcrumbs$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map( event => {
        let root: ActivatedRoute = this.activatedRoute.root;
        return this.createBreadcrumbs( root );
      })
    )
  }

  createBreadcrumbs( route, url: string = '', breadcrumbs = [] ) {
    const children = route.firstChild;

    if( !children ){
      return [...breadcrumbs];
    }

    const routeURL: string = children.snapshot.url
      .map(segment => segment.path)
      .join('/');
    const label = children.snapshot.data['breadcrumb'];

    if (routeURL !== '') {
      url += `/${routeURL}`;
    }

    const breadcrumb = {
      label: label,
      params: children.snapshot.params,
      url: routeURL
    }

    return this.createBreadcrumbs( children, url,  [...breadcrumbs, breadcrumb])
  }
}