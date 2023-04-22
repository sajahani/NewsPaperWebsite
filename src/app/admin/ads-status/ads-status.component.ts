import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-ads-status',
  templateUrl: './ads-status.component.html',
  styleUrls: ['./ads-status.component.css']
})
export class AdsStatusComponent {

  constructor( public adminService:AdminService , private dialog:MatDialog)
  {
  }
  
  
  
  ngOnInit()
  {
    this.adminService.GetAllAds();
  }
  


  

  async  approveAds(item :any)
  {
    item.adsstatus='Accept'
     await this.adminService.UpdateADSstatus(item)
   this.adminService.GetAllAds()
   
  
  
  
  }
  
  async rejectAds(item :any  )
  {
    item.adsstatus='Reject'
    await this.adminService.UpdateADSstatus(item)
  this.adminService.GetAllAds()
  
  
  }
  

}


