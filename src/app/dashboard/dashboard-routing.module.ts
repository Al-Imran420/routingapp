import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeChildBComponent } from './home/home-child-b/home-child-b.component';
import { HomeChildComponent } from './home/home-child/home-child.component';
import { HomeChildDetailsComponent } from './home/home-child/home-child-details/home-child-details.component';
import { HomeChildDetailsBComponent } from './home/home-child/home-child-details-b/home-child-details-b.component';
import { AboutChildAComponent } from './about/about-child-a/about-child-a.component';
import { AboutChildBComponent } from './about/about-child-b/about-child-b.component';
import { AboutChildDetailsAComponent } from './about/about-child-b/about-child-details-a/about-child-details-a.component';
import { AboutChildDetailsBComponent } from './about/about-child-b/about-child-details-b/about-child-details-b.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      // { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        children: [
          // { path: '', redirectTo: '/dashboard/home/home-child-a', pathMatch: 'full' },
          {
            path: '',
            component: HomeChildComponent,
            children: [
              // { path: '', redirectTo: '/dashboard/home/home-child-a/home-child-details-a', pathMatch: 'full' },
              {
                path: '',
                component:HomeChildDetailsComponent
              },
              {
                path: 'home-child-details-b',
                component:HomeChildDetailsBComponent
              }
            ]
          },
          {
            path: 'home-child-b',
            component: HomeChildBComponent
          }
        ]
      },
      {
        path: 'about',
        component: AboutComponent,
        children: [
          {
            path: '',
            component:AboutChildAComponent
          },
          {
            path: 'about-child-b',
            component: AboutChildBComponent,
            children: [
              {
                path: '',
                component:AboutChildDetailsAComponent
              },
              {
                path: 'about-child-details-b',
                component:AboutChildDetailsBComponent
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
