import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  constructor(public authService: AuthService )
  {

  }

  RegisterForm = new FormGroup(
    {
      firstname3: new FormControl('',Validators.required),
      lastname3: new FormControl('',[Validators.required]),
      password3: new FormControl('',[Validators.required , Validators.minLength(4)]),
      email3 : new FormControl('',[Validators.required,Validators.email]),
      imagename3 : new FormControl(''),
      roleid3: new FormControl('',[Validators.required])
    }
     
      )

      ngOnInit()
      {
        this.authService.GetAllRoleNews();
      }
      
      
   
     async RegisterationUser()
      {
        
         

         await this.authService.RegisterationUser(this.RegisterForm.value)
         console.log(this.RegisterForm.value);
         
        

      }

  UploadImage(input: any) {
    if (input.files.length != 0)
    {
      let uploadedFile = input.files[0] // imagefile 
      let formData = new FormData()
      formData.append('file', uploadedFile)
      this.authService.UploadImage(formData)
    }

  }
 

}

