import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebSitesService {

//
//
//   getUser() {
//     return this.http.get(this.websitesUrl)
//              .toPromise()
//              .then(response => {
//                console.log(response.json());
//                return response.json()
//
//              })
//              .catch(this.handleError);
// }
//
// private handleError(error: any): Promise<any> {
//   console.error('An error occurred', error); // for demo purposes only
//   return Promise.reject(error.message || error);
// }

 private websitesUrl = '../websites';

  constructor(private http: Http) { }
  getWebSites(){
        return this.http.get(this.websitesUrl)
                 .toPromise()
                 .then(response => {
                   console.log(response.json());
                   return response.json()

                 })
                 .catch(this.handleError);

  }
  getWebSitesMaster(){
    return this.getWebSites().then(websites=>{
      return this.getSum(websites);
    })
  }
  getWebSite(id){
    return this.http.get(this.websitesUrl+'/'+id)
             .toPromise()
             .then(response => {
               console.log(response.json());
               return response.json()

             })
             .catch(this.handleError);
  }
  getSum(websites){
    var data = {
      clicks:0,
      imppressions:0,
      eCPM:0,
      revPerMonth:[]
    }
    var i = 0;
    for(i; i<websites.length; i++){
      data.clicks += websites[i].clicks;
      data.imppressions += websites[i].imppressions;
      data.eCPM += websites[i].eCPM;
      for(var j =0 ;j<websites[i].revPerMonth.length;j++){
        var arr = websites[i].revPerMonth;
        if(!data.revPerMonth[j]){
          data.revPerMonth.push(arr[j]);
        }else{
          data.revPerMonth[j]+= arr[j];
        }

      }
    }
    data.eCPM = data.eCPM/i;
    return data;
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
