import { Injectable } from '@angular/core';
import { WebSites } from './mockdata';
@Injectable()
export class WebSitesService {

  constructor() { }
  getWebSites(){
    return Promise.resolve(WebSites);
  }
  getWebSitesMaster(){
    return this.getWebSites().then(websites=>{
      return this.getSum(websites);
    })
  }
  getWebSite(id){
    return this.getWebSites().then(websites=>{
      return websites.find(elm=>{
        return elm.id==id;
      })
    })
  }
  getSum(websites){
    var data = {
      clicks:0,
      imppressions:0,
      eCPM:0
    }
    var i = 0;
    for(i; i<websites.length; i++){
      data.clicks += websites[i].clicks;
      data.imppressions += websites[i].imppressions;
      data.eCPM += websites[i].eCPM;
    }
    data.eCPM = data.eCPM/i;
    return data;
  }

}
