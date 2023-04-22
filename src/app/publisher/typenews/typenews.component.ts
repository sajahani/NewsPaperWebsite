import { Component } from '@angular/core';
import { HomeService } from 'src/app/home.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-typenews',
  templateUrl: './typenews.component.html',
  styleUrls: ['./typenews.component.css']
})
export class TypenewsComponent {
  constructor(public homeService : HomeService, public authService:AuthService ,private  router :Router ){} 
     
  

ngOnInit()
{
   this.homeService.GetAllNewsPaper();

   let user:any = localStorage.getItem('user')
   user = JSON.parse(user);
   console.log(user.regid);

   this.homeService.GetArticlesUser(user.regid);
  
}

GetIdNews(i : any)
{
  this.router.navigate(['/publisher/addarticle/'+i.newsid]);
  console.log(i.newsid);
  
   
}
}
