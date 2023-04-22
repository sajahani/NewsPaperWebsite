
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-contact-us-news-manage',
  templateUrl: './contact-us-news-manage.component.html',
  styleUrls: ['./contact-us-news-manage.component.css']
})
export class ContactUsNewsManageComponent {

  @ViewChild('CreateForm') create:any
  @ViewChild('UpdateForm') Update :any
  @ViewChild('DeleteForm') Delete:any
  @ViewChild('DetailsForm') Details:any

  UpdatecontactForm = new FormGroup(
    {
      contid:new FormControl(''),
      fullname : new FormControl('',Validators.required),
      email :new FormControl('',Validators.required),
      message4 :new FormControl('',Validators.required),

  }
  )




  CreateContactForm = new FormGroup(
    {
    
      fullname : new FormControl('',Validators.required),
      email :new FormControl('',Validators.required),
      message4 :new FormControl('',Validators.required),
  }
  )




constructor( public adminService:AdminService , private dialog:MatDialog)
{
}



ngOnInit()
{
  this.adminService.GetAllContactUsNews()
}

async GetById(contactid: number) 
{
await this.adminService.GetContactusnewsId(contactid)
this.dialog.open(this.Details)
}



async  OpenUpdateDialog(conid :number)
{
 await this.adminService.GetContactusnewsId(conid)
this.UpdatecontactForm.patchValue(this.adminService.ContactusnewsId)
console.log(this.UpdatecontactForm.patchValue(this.adminService.ContactusnewsId));

this.dialog.open(this.Update,{
  height: '400px',
  width: '600px'})
  

}


 async UpdateeTypeAds()
{
   await this.adminService.UpdateContactUsNews(this.UpdatecontactForm.value)
  this.adminService.GetAllContactUsNews()
}


selectedItem=0;
 OpenDeleteDialog(contid :number)
{
  this.selectedItem= contid
  this.dialog.open(this.Delete)
}

async DeleteType()
{
  await this.adminService.DeleteContactUsNews(this.selectedItem)
this.adminService.GetAllContactUsNews()

}





OpenDialogCreate()
{
this.dialog.open(this.create)
}


 async CreateTypeAds()
{
  await this.adminService.createTypeAds(this.CreateContactForm.value)
  this.adminService.GetAllAdsType()
}
}


