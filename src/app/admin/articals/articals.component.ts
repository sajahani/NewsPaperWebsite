import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-articals',
  templateUrl: './articals.component.html',
  styleUrls: ['./articals.component.css']
})
export class ArticalsComponent {

  @ViewChild('UpdateForm') UpdateStatuse :any

  UpdateArticalStatuseForm = new FormGroup(
    {
      articalid:new FormControl(''),
    
      artstatus :new FormControl('',Validators.required)
     

  
  }
  )
  constructor( public adminService:AdminService , private dialog:MatDialog)
  {
  }
  
  
  
  ngOnInit()
  {
    this.adminService.GetAllArtical();
  }

  async  approveArticals(item :any)
  {
    item.artstatus='Accept'
     await this.adminService.UpdateArticleStatus(item)
   this.adminService.GetAllArtical()
   
  
  
  
  }
  
  async rejectArticals(item :any  )
  {
    item.artstatus='Reject'
    await this.adminService.UpdateArticleStatus(item)
  this.adminService.GetAllArtical()
  
  
  }
  
  
  



}


