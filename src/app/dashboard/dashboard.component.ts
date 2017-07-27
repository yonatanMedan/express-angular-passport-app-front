import { Component, OnInit } from '@angular/core';
import { WebSitesService } from '../website.service/web-sites.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private webSitesService:WebSitesService) { }
  data = {
    imppressions:10000,
    clicks:1236,
    eCPM:4.5
  };



  ngOnInit() {
    this.webSitesService.getWebSitesMaster().then(data=>{
      this.data = data
    });
  }

}
