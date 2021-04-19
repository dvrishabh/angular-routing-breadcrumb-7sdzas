import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe((params: Params)=>{
    //   console.log(params)
    // })

    
  }
  to(){
    this.router.navigate(['/about', 'gogogo' ]);
  }
}