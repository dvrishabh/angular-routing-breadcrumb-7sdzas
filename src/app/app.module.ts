import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule 
  ],
  declarations: [ 
    AppComponent, 
    AboutComponent, 
    ListComponent, 
    DetailComponent, BreadcrumbComponent 
  ],
  bootstrap:[
     AppComponent 
  ]
})
export class AppModule { }
