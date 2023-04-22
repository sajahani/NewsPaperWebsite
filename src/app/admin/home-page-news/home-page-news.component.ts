import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-home-page-news',
  templateUrl: './home-page-news.component.html',
  styleUrls: ['./home-page-news.component.css']
})
export class HomePageNewsComponent {

  @ViewChild('CreateForm') create:any
  @ViewChild('UpdateForm') Update :any
  @ViewChild('DeleteForm') Delete:any
  @ViewChild('DetailsForm') Details:any



  UpdateHomePageForm = new FormGroup(
    {
      homeid:new FormControl(''),
      homeimg : new FormControl(''),
      logoimg :new FormControl(''),
      
      footer : new FormControl('',Validators.required),
      email :new FormControl('',Validators.required),
      phone : new FormControl(Validators.required),
      title :new FormControl('',Validators.required),
      
      titleabout : new FormControl('',Validators.required),
      descabout :new FormControl('',Validators.required)
  
  }
  )



  CreateHomePageForm = new FormGroup(
    {
      
      logoimg :new FormControl(''),
      
      footer : new FormControl('',Validators.required),
      email :new FormControl('',Validators.required),
      phone : new FormControl(Validators.required),
      title :new FormControl('',Validators.required),
      
      titleabout : new FormControl('',Validators.required),
      descabout :new FormControl('',Validators.required)
  
  }
  )








  constructor( public adminService:AdminService , private dialog:MatDialog)
  {
  }
  
  
  
  ngOnInit()
  {
    this.adminService.GetAllAllHomePage();
  }


  async GetById(homeeid: number) 
{
await this.adminService.GetHomePageById(homeeid)
this.dialog.open(this.Details)
}





  

async  OpenUpdateDialog(homeeid :number)
{
 await this.adminService.GetHomePageById(homeeid)
this.UpdateHomePageForm.patchValue(this.adminService.HomePage)
console.log(this.UpdateHomePageForm.patchValue(this.adminService.HomePage));

this.dialog.open(this.Update,{
  height: '400px',
  width: '600px'})
  

}


 async UpdateeHome()
{
   await this.adminService.UpdatHomePage(this.UpdateHomePageForm.value)
  this.adminService.GetAllAllHomePage()
}



UploadImage1(input :any)
{
  if( input.files.length !=0){
let uploadFile = input.files[0]
let formdata = new FormData()
formdata.append('file',uploadFile)
this.adminService.UploadImage1(formdata)

  }
}

UploadImage2(input :any)
{
  if( input.files.length !=0){
let uploadFile = input.files[0]
let formdata = new FormData()
formdata.append('file1',uploadFile)
this.adminService.UploadImage2(formdata)

  }
}






selectedItem=0;
 OpenDeleteDialog(Homeid :number)
{
  this.selectedItem= Homeid
  this.dialog.open(this.Delete)
}

async DeleteHome()
{
  await this.adminService.DeleteHomePage(this.selectedItem)
this.adminService.GetAllAllHomePage()

}





OpenDialogCreate()
{
this.dialog.open(this.create)
}


 async CreateHomePage()
{
  await this.adminService.createHomePagee(this.CreateHomePageForm.value)
  this.adminService.GetAllAllHomePage()
}


}
