import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { HomeService } from 'src/app/home.service';


@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.css']
})
export class FormArticleComponent {
    
  constructor(public homeService : HomeService , public authService : AuthService ,
    private activeRoute : ActivatedRoute
    ){
      
    }
    
   
   async ngOnInit()
    { 
        let newId = Number(this.activeRoute.snapshot.paramMap.get('id'));

          this.articleForm.get('newsid3')?.setValue(newId) ;

          let user:any = localStorage.getItem('user')
          user = JSON.parse(user);
          console.log(user.regid);

          this.articleForm.get('userid3')?.setValue(Number(user.regid))

         await this.homeService.GetAllAds();

    }

   articleForm = new FormGroup(
      { 
        title:new FormControl(''),
        type : new FormControl(''),
        artdate : new FormControl(''),
        descriptionart : new FormControl(''),
        imagearticals : new FormControl(''),
        userid3 : new FormControl(),
        newsid3: new FormControl ()
    
      }
    )
Types = Object.values(Type);
 
  




 CreateArticalfun()
{
    this.homeService.CreateArtical(this.articleForm.value)
  console.log(this.articleForm.value);
  
}



UploadImageArt(input : any)
{
  if (input.files.length != 0)
    {
      let uploadedFile = input.files[0] // imagefile 
      let formData = new FormData()
      formData.append('file', uploadedFile)
      this.homeService.uploadImageArticle(formData)
    }

}




}

      

enum Type {
  World = 'World',
  Jordan = 'Jordan',
  Sport = 'Sport',
  

}
