
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-publisher-view',
  templateUrl: './publisher-view.component.html',
  styleUrls: ['./publisher-view.component.css']
})
export class PublisherViewComponent {

  @ViewChild('UpdateForm') Update :any

  UpdatePublisherStatueForm = new FormGroup(
    {
      regid:new FormControl(''),
      firstname3 : new FormControl('',Validators.required),
      lastname3 :new FormControl('',Validators.required),
      email3 :new FormControl('',Validators.required),
      userstatus:new FormControl('',Validators.required)
  
  })

  constructor( public adminService:AdminService , private dialog:MatDialog)
  {
  }


  
ngOnInit()
{
  this.adminService.GetAllViewPublisherInAdmin();
}


async  approvePublisher(item :any)
{
  item.userstatus='Active'
   await this.adminService.UpdatePublisherStatus(item)
 this.adminService.GetAllViewPublisherInAdmin()
 



}

async rejectPublisher(item :any  )
{
  item.userstatus='InActive'
  await this.adminService.UpdatePublisherStatus(item)
this.adminService.GetAllViewPublisherInAdmin()


}

}
