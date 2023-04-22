import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private toaster: ToastrService , private route: Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const token = localStorage.getItem('token')
let user:any = localStorage.getItem('user')
user = JSON.parse(user)

if(token)
{
if (state.url.includes('admin'))
{
  if (user.roleid == 1)
  {
    this.toaster.success("Welcome on admin dashboard")
    return true;
  }
  else{
    this.toaster.error("This Page For Admin")
    this.route.navigate([''])
   return false; 
  }
}


if (state.url.includes('publisher'))
{
  if (user.roleid == 2)
  {
    this.toaster.success("Welcome on publisher dashboard")
    return true;
  }
  else{
    this.toaster.error("This Page For Publisher")
    this.route.navigate([''])
   return false; 
  }
}



  
}
else{
  this.toaster.error("This Page For User")
  this.route.navigate([''])
 return false; 
}


return true



    }
  
}
