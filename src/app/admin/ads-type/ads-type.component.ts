import { AdminService } from 'src/app/admin.service';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { DetailsNewComponent } from 'src/app/home/details-new/details-new.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ads-type',
  templateUrl: './ads-type.component.html',
  styleUrls: ['./ads-type.component.css']
})
export class AdsTypeComponent {
  @ViewChild('CreateForm') create:any
  @ViewChild('UpdateForm') Update :any
  @ViewChild('DeleteForm') Delete:any
  @ViewChild('DetailsForm') Details:any

  UpdateTypeAdsForm = new FormGroup(
    {
      typeid:new FormControl(''),
    type : new FormControl('',Validators.required),
    price :new FormControl('',Validators.required),
  
  }
  )




  CreateTypeAdsForm = new FormGroup(
    {
    type : new FormControl('',Validators.required),
    price :new FormControl('',Validators.required),
  
  }
  )




constructor( public adminService:AdminService , private dialog:MatDialog)
{
}



ngOnInit()
{
  this.adminService.GetAllAdsType();
}

async GetById(typeid: number) 
{
await this.adminService.GetAdsTypeById(typeid)
this.dialog.open(this.Details)
}



async  OpenUpdateDialog(typeid :number)
{
 await this.adminService.GetAdsTypeById(typeid)
this.UpdateTypeAdsForm.patchValue(this.adminService.AdsType)
console.log(this.UpdateTypeAdsForm.patchValue(this.adminService.AdsType));

this.dialog.open(this.Update,{
  height: '400px',
  width: '600px'})
  

}


 async UpdateeTypeAds()
{
   await this.adminService.UpdateTypeAds(this.UpdateTypeAdsForm.value)
  this.adminService.GetAllAdsType()
}


selectedItem=0;
 OpenDeleteDialog(typeid :number)
{
  this.selectedItem= typeid
  this.dialog.open(this.Delete)
}

async DeleteType()
{
  await this.adminService.DeleteTypAds(this.selectedItem)
this.adminService.GetAllAdsType()

}





OpenDialogCreate()
{
this.dialog.open(this.create)
}


 async CreateTypeAds()
{
  await this.adminService.createTypeAds(this.CreateTypeAdsForm.value)
  this.adminService.GetAllAdsType()
}
}

