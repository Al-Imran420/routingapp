import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeChildComponent } from './home/home-child/home-child.component';
import { HomeChildBComponent } from './home/home-child-b/home-child-b.component';
import { HomeChildDetailsComponent } from './home/home-child/home-child-details/home-child-details.component';
import { HomeChildDetailsBComponent } from './home/home-child/home-child-details-b/home-child-details-b.component';
import { AboutChildAComponent } from './about/about-child-a/about-child-a.component';
import { AboutChildBComponent } from './about/about-child-b/about-child-b.component';
import { AboutChildDetailsAComponent } from './about/about-child-b/about-child-details-a/about-child-details-a.component';
import { AboutChildDetailsBComponent } from './about/about-child-b/about-child-details-b/about-child-details-b.component';
import { RootComponent } from './root/root.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HomeChildComponent,
    HomeChildBComponent,
    HomeChildDetailsComponent,
    HomeChildDetailsBComponent,
    AboutChildAComponent,
    AboutChildBComponent,
    AboutChildDetailsAComponent,
    AboutChildDetailsBComponent,
    RootComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
