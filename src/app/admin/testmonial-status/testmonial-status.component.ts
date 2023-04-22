import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-testmonial-status',
  templateUrl: './testmonial-status.component.html',
  styleUrls: ['./testmonial-status.component.css']
})
export class TestmonialStatusComponent {
  
  constructor( public adminService:AdminService )
  {
  }
  ngOnInit()
{
  this.adminService.GetAlltestmonialNews()
}


async  approvetestmonialNews(testmonialNews :any)
{
   testmonialNews.status='Accept'
   await this.adminService.UpdatetestmonialNews(testmonialNews)
 this.adminService.GetAlltestmonialNews()
 



}

async rejecttestmonialNews(testmonialNews :any)
{
  testmonialNews.status='Reject'
  await this.adminService.UpdatetestmonialNews(testmonialNews)
this.adminService.GetAlltestmonialNews()


}


}
