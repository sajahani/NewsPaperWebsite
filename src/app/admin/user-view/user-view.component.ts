import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  
  constructor( public adminService:AdminService )
  {
  }


  
ngOnInit()
{
  this.adminService.GetAllUsers();
}

}

