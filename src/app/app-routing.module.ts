import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: '首頁'
    },
    // component: AppComponent,
    children: [
      {
        path: 'about/:name',
        component: AboutComponent,
        data: {
          breadcrumb: '關於'
        },
      },
      {
        path: 'list',
        component: ListComponent,
        data: {
          breadcrumb: '列表'
        },
        children: [
          {
            path: 'detail',
            component: DetailComponent,
            data: {
              breadcrumb: '內容'
            },
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
  // imports: [CommonModule],
  // declarations: []
})
export class AppRoutingModule { }