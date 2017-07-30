import { Component, OnInit } from '@angular/core';
import { WebSitesService } from '../website.service/web-sites.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private webSitesService:WebSitesService) { }
  websites;



  ngOnInit() {
    this.webSitesService.getWebSitesMaster().then(data=>{
      console.log(data);
      this.websites = data
    });
  }

}
