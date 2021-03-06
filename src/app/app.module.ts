import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebSiteListComponent } from './web-site-list/web-site-list.component';
import { WebSiteDetailComponent } from './web-site-detail/web-site-detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WebSitesService } from './website.service/web-sites.service';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { HttpModule }    from '@angular/http';
import { UserService } from './user.service/user.service'

const appRoutes: Routes = [
  { path:'',redirectTo:"dashboard",pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'websites',component:WebSiteListComponent },
  { path: 'websites/:id',      component: WebSiteDetailComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WebSiteListComponent,
    WebSiteDetailComponent,
    SidebarComponent,
    TopbarComponent,
    MyLineChartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule
  ],
  providers: [WebSitesService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
