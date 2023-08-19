import { Component } from '@angular/core';
import { PasswordManagerService } from '../password-manager.service';
import { Observable } from 'rxjs';
import { SiteInfo } from '../inteface/site-info';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent {

  allSites !: SiteInfo[];
  singleSite : SiteInfo={siteId:0, siteName:"", siteURL:"", siteImgURL: ""};
  formNew : string = "Add New";


  constructor(private passwordManager: PasswordManagerService){
    this.loadSites();
  }
  
  addNewSite(){
    this.formNew="Add New";
    this.singleSite={siteId:0, siteName:"", siteURL:"", siteImgURL: ""};
  }
  editSite(values : SiteInfo){    
    this.singleSite=values;  
    this.formNew="Edit";
  }
  loadSites(){
    this.allSites = this.passwordManager.loadSites();
  }
  deleteSite(id: number){
    this.passwordManager.deleteSite(id);
    alert("Data Deleted Successfully");
  }
  onSubmit(values:SiteInfo){      
    this.passwordManager.addSite(values);
    this.formNew="Add New";
    this.singleSite={siteId:0, siteName:"", siteURL:"", siteImgURL: ""};
  }

}
