import { Component, Input, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { DetailsNewComponent } from 'src/app/home/details-new/details-new.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-news-manage',
  templateUrl: './news-manage.component.html',
  styleUrls: ['./news-manage.component.css']
})
export class NewsManageComponent {

  @ViewChild('CreateForm') create:any
@ViewChild('UpdateForm') Update :any
@ViewChild('DeleteForm') Delete:any
@ViewChild('DetailsForm') Details:any


createNewsForm = new FormGroup(
  {
  type3 : new FormControl('',Validators.required),
  description3 :new FormControl('',Validators.required),
  imagenews:new FormControl('',Validators.required)
}
)



UpdateNewsForm = new FormGroup(
  {
    newsid:new FormControl(''),
  type3 : new FormControl('',Validators.required),
  description3 :new FormControl('',Validators.required),
  imagenews:new FormControl('',Validators.required)

  
}
)

@ViewChild('CreateForm') createNews:any
@ViewChild('UpdateForm') UpdateNews :any
@ViewChild('DeleteForm') DeleteNews:any
@ViewChild('DetailsForm') DetailsNews:any


constructor( public adminService:AdminService , private dialog:MatDialog)
{

}


ngOnInit()
{
  this.adminService.GetAllNews();
}



async GetById(Newsid: number) 
{
await this.adminService.GetNewseById(Newsid)
this.dialog.open(this.DetailsNews)
}



async  OpenUpdateDialog(newseid :number)
{
 await this.adminService.GetNewseById(newseid)
this.UpdateNewsForm.patchValue(this.adminService.News)
console.log(this.UpdateNewsForm.patchValue(this.adminService.News));

this.dialog.open(this.Update,{
  height: '400px',
  width: '600px'})
  

}


 async UpdateeNews()
{
   await this.adminService.updateNews(this.UpdateNewsForm.value)
  this.adminService.GetAllNews()
}



selectedItem=0;
 OpenDeleteDialog(Newsid :number)
{
  this.selectedItem= Newsid
  this.dialog.open(this.DeleteNews)
}

async DeleteNwes()
{
  await this.adminService.DeleteNews(this.selectedItem)
this.adminService.GetAllNews()

}


OpenDialogCreate()
{
this.dialog.open(this.createNews)
}


 async CreateNews()
{
  await this.adminService.createNews(this.createNewsForm.value)
  this.adminService.GetAllNews()
}


imageName1 : any ;

UploadImage(input :any)
{
  if( input.files.length !=0){
let uploadFile = input.files[0]
let formdata = new FormData()
formdata.append('file',uploadFile)
this.adminService.UploadImage(formdata)

this.imageName1 = uploadFile.name;

  }
}

}

