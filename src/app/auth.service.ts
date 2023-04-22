import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { ElementSchemaRegistry } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toaster: ToastrService,private router : Router)
   { }
  

  result = 0
 RegisterationUser(register:any)
 {
  const header = {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json'
  }
  
  const Options ={
    headers: new HttpHeaders(header)
  }
   register.imagename3 = this.imageName
  return new Promise<void>((resolve, reject)=>{
    this.spinner.show()
    this.http.post("https://localhost:44390/api/RegistrationNews/Register",register,Options).subscribe(
      {
        next:(res:any)=>{
          this.result= res
          this.spinner.hide()
          if(this.result == 1)
          {
             this.toaster.success("Registration successfully")
             this.router.navigate(["/auth/login"])
            console.log(this.result);
           
          }
          else{
            this.toaster.error("Email already exists")
          }
          
            
          
          resolve()

        },
        error:(err)=>{
          this.spinner.hide()
          this.toaster.error("erro")
        }

      }
    )
  })

 }

 imageName = "" // imagename

 UploadImage(imageFile : any) 
 {
   this.http.post("https://localhost:44390/api/RegistrationNews/uploadImage",imageFile).subscribe(
     {
       next:(res:any)=>{this.imageName = res.imagename3},
       error:()=>{}
     }
   )
 }

AllRole:any = []
 GetAllRoleNews()
 { return new Promise<void>((resolve, reject)=>{
  this.spinner.show()
  this.http.get("https://localhost:44390/api/RoleNews").subscribe(
    {
      next:(res) =>{
        this.AllRole = res
        this.spinner.hide()
        
      },
      
      error:(err)=>
      {
        this.spinner.hide()

      }
        
      
    }
  )
})

 }


  LoginUser(user: any) {
    const header = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }

    const Options = {
      headers: new HttpHeaders(header)
    }
    this.spinner.show()
    this.http.post("https://localhost:44390/api/RegistrationNews/LoginUser", user,Options).subscribe(
      {
        next :(res:any)=>{
          let data : any = jwt_decode(res)
          console.log(data);

          localStorage.setItem('token',res)
          localStorage.setItem('user',JSON.stringify(data))
          this.spinner.hide()
          this.spinner.show()
          if(data.roleid == 1)
          {
            this.spinner.hide()
            this.router.navigate(["/admin/adminHome"])
          }
          else if(data.roleid == 2 && data.status=="Active")
          {
            this.router.navigate(["/publisher/typenews"])
          }
          else if(data.roleid == 3)
          {
            this.router.navigate(["/user/shownews"])
          }
          else 
          {
            this.router.navigate(["/auth/registerUser"])
            this.toaster.warning("Publisher does not agree with your status by the admin")
          }
       
        },
        error:(err)=>{
          this.spinner.hide()
          console.log(err);
          
          this.toaster.error("Invalid username or password")
        }


      }
    )

  }



}
