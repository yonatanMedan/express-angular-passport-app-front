import { Component, OnInit } from '@angular/core';
import {WebSitesService} from '../website.service/web-sites.service';

@Component({
  selector: 'app-web-site-list',
  templateUrl: './web-site-list.component.html',
  styleUrls: ['./web-site-list.component.css']
})
export class WebSiteListComponent implements OnInit {

  constructor(private webSitesService: WebSitesService) { }
  data:Array<Object>;
  ngOnInit() {
    this.webSitesService.getWebSites().then(websites=>{
      this.data = websites;
    })
  }

}
