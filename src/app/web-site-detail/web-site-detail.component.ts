import { Component, OnInit } from '@angular/core';
import { WebSitesService } from '../website.service/web-sites.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-web-site-detail',
  templateUrl: './web-site-detail.component.html',
  styleUrls: ['./web-site-detail.component.css']
})
export class WebSiteDetailComponent implements OnInit {

  websiteId;
  website;
  sub;
  constructor(private webSitesService: WebSitesService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.websiteId = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
       this.webSitesService.getWebSite(params['id']).then(a=>{this.website = a})
    });


  }

}
