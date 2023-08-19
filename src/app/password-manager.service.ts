import { Injectable } from '@angular/core';
import { SiteInfo } from './inteface/site-info';

@Injectable({
  providedIn: 'root'
})
export class PasswordManagerService {
  siteData:SiteInfo[];
  constructor() { 
    this.siteData =[
      {siteId:1, siteName: "Facebook", siteURL: "www.facebook.com", siteImgURL: "https://pbs.twimg.com/profile_images/1646955748444852231/XGehZ_9v_400x400.jpg"},
      {siteId:2, siteName: "Gmail", siteURL: "www.gmail.com", siteImgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9q4Ye0zblqKApnPuk531Rn14eHCoUa1qcjA&usqp=CAU"}
    ]
  }
  addSite(data:SiteInfo){
    //API Call for Insert Here using HTTPClient    
    if(data.siteId==undefined){
      data.siteId= Math.max(...this.siteData.map(o=>o.siteId), 0)+1;
      this.siteData.push(data);
      alert("Data Saved Successfully");
    }
    else{
      let objIndex = this.siteData.findIndex((obj => obj.siteId == data.siteId));
      this.siteData[objIndex]=data;
      alert("Data Edited Successfully");
    }
   
  }

  deleteSite(id: number){
    let objIndex = this.siteData.findIndex((obj => obj.siteId == id));
    this.siteData.splice(objIndex, 1);    
  }


  loadSites(){
    return this.siteData;
  }
}
