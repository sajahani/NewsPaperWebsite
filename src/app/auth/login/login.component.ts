import { Component } from '@angular/core';
import {FormControl,Validators,FormGroup} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 export class LoginComponent {

  constructor(public authService : AuthService )
  {
    
  }


loginForm=new FormGroup(
  {
    email3: new FormControl('',[Validators.required , Validators.email]),
    password3 : new FormControl('',[Validators.required,Validators.minLength(4)])
  }

)


loginUser()
{
  this.authService.LoginUser(this.loginForm.value)

}

GetData()
{


const user1= this.loginForm.value;
 
console.log(user1);
}

}
