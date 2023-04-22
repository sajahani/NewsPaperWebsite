import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toaster: ToastrService,private router : Router) { }

 Homepage : any ={}
  GetByHomepagenews(id : number )
  {
    this.spinner.show();
  this.http.get("https://localhost:44390/api/HomePageNews/GetByHomepagenewsId/" + id).subscribe(
    {
      next: (res) => {
        this.Homepage = res
        this.spinner.hide()
      },
      error: (err) => {
        console.log(err);
        this.spinner.hide()
      }
    }
  )
  }


  CreateContactusnews(contactus: any) 
  {
    return new Promise<void>((resolve, reject) => {

      this.spinner.show()
      this.http.post("https://localhost:44390/api/ContactUsNews", contactus).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Create  Successfully")
            resolve();
          },
          error: () => {
            this.spinner.hide()
            this.toaster.error("Something went wrong, Please try again")
          }
        }
      )
    })
  }


  AcceptTestimonial : any = []
 async GettestmonialNewsByAcc() {
    return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44390/api/TestmonialNews/GettestmonialNewsByAcc").subscribe(
      {
        next: (res) => {
          this.AcceptTestimonial = res
          this.spinner.hide()
          
        },
        error: (err) => {
          console.log(err)
          this.spinner.hide()
        
        }
      }
    )
  })
  }


  AllNews : any = []
  async GetAllNewsPaper()
  {


    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.get("https://localhost:44390/api/NewsPaper").subscribe(
        {
          next: (res) => {
            this.AllNews  = res
            this.spinner.hide()
            
          },
          error: (err) => {
            console.log(err)
            this.spinner.hide()
          
          }
        }
      )
    })
  
  }


  AllArticleUser : any = []
  async GetArticlesUser(userid : number)
  {


    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.get("https://localhost:44390/api/Articals/GetArticlesUser/"+userid).subscribe(
        {
          next: (res) => {
            this.AllArticleUser  = res
            this.spinner.hide()
            
          },
          error: (err) => {
            console.log(err)
            this.spinner.hide()
          
          }
        }
      )
      
    })
    
  }
     

  CreateArtical( article : any )
  {
      article.imagearticals = this.imageNameArticle;
      //article.userid3 = 108 ;
     // article.artdate = "2023-02-22T00:00:00"
    this.spinner.show()
    this.http.post("https://localhost:44390/api/Articals/create" , article).subscribe({
      next:()=>
      {
        this.spinner.hide()
        this.toaster.success("Success adding article wait accept from admin")
      },

      error: ()=>
      {
        this.spinner.hide()
        this.toaster.error("Something went wrong, Please try again")
      }
    })

  }







  imageNameArticle = "" // imagename

  uploadImageArticle(imageFile : any) 
  {
    this.http.post("https://localhost:44390/api/Articals/uploadImageArticle",imageFile).subscribe(
      {
        next:(res:any)=>{this.imageNameArticle = res.imagearticals},
        error:()=>{}
      }
    )
  }
   


  AllArticle : any = []
  
 async GetAllArtical()
  {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.get("https://localhost:44390/api/Articals").subscribe(
        {
          next: (res) => {
            this. AllArticle = res
            this.spinner.hide()
            resolve()
            
          },
          error: (err) => {
            console.log(err)
            this.spinner.hide()
          
          }
        }
      )
      
    })
    
  }
 

  TypeArticle : any = []

  TypeArticals(typeArt : string )
  {

    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.get("https://localhost:44390/api/Articals/TypeArticals/" + typeArt).subscribe(
        {
          next: (res) => {
            this.TypeArticle = res
            this.spinner.hide()
            resolve()
            
          },
          error: (err) => {
            console.log(err)
            this.spinner.hide()
          
          }
        }
      )
      
    })


  }

AllTypeAds : any = []

GetAllTypeAds()
{
  return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44390/api/TypeAd").subscribe(
      {
        next: (res) => {
          this.AllTypeAds = res
          this.spinner.hide()
          resolve()
          
        },
        error: (err) => {
          console.log(err)
          this.spinner.hide()
        
        }
      }
    )
    
  })

  

}






CreateAds( ads : any )
{
    ads.imageads = this.imageNameAds;
   
  this.spinner.show()
  this.http.post("https://localhost:44390/api/Ads" , ads).subscribe({
    next:()=>
    {
      this.spinner.hide()
      this.toaster.success("Success adding ads wait accept from admin")
    },

    error: ()=>
    {
      this.spinner.hide()
      this.toaster.error("Something went wrong, Please try again")
    }
  })

}

imageNameAds = "" // imagename

uploadImageAds(imageFile : any) 
{
  this.http.post("https://localhost:44390/api/Ads/uploadImageAds",imageFile).subscribe(
    {
      next:(res:any)=>{this.imageNameAds= res.imageads},
      error:()=>{}
    }
  )
}
 



AdsUser : any = []

async GetAllAdsUser(userid : number)
{

  
  return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44390/api/Ads/GetAdsUser/" + userid).subscribe(
      {
        next: (res) => {
          this.AdsUser  = res
        
          this.spinner.hide()
          
        },
        error: (err) => {
          console.log(err)
          this.spinner.hide()
        
        }
      }
    )
    
  })


}

resultMessage : any = {}

paymentCompleted : boolean = false;

CheckOut(bank:any , userid : number)
{
   this.spinner.show()
   this.http.post("https://localhost:44390/api/PaymentNews/okR/"+ userid , bank ).subscribe({
    next : (res) =>
    {
      this.resultMessage = res,
      this.spinner.hide()
      this.toaster.success(this.resultMessage.message)
      this.paymentCompleted = true;
      console.log(this.resultMessage.message);
      
    },

    error : (err)=>
    { 
      this.spinner.hide()
      this.toaster.error(this.resultMessage.message,"Invalid credit card number or CVV or Balance not enough")
    }

   })
}



 Profile: any = {}
  async GetRegistrationNewsById(Regid: number)//10
  {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.get("https://localhost:44390/api/RegistrationNews/GetRegistrationNewsById/" + Regid).subscribe(
        {
          next: (res) => {
           this.Profile = res
           console.log(this.Profile);
           
            this.spinner.hide()
            this.toaster.success("Success")
            resolve()
          },

          error: (err) => {
            console.log(err)
            this.spinner.hide()
            this.toaster.error("Error")
          }
        }
      )
     
      })
}



async UpdateProfile(profileuser : any)
{
  profileuser.imagename3 = this.imageName || profileuser.imagename3 ;
 
 
  return new Promise<void>((resolve,reject)=>{
  this.spinner.show()
  this.http.put("https://localhost:44390/api/RegistrationNews/UpdateUser", profileuser).subscribe(
    {
      next:()=>{
        this.spinner.hide()
        this.toaster.success("Updated Successfully")
        resolve()
      },
      error:(err)=>{
        console.log(err);
        this.spinner.hide()
        this.toaster.error("Error")
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




AllAds : any = []

GetAllAds()
{
  return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44390/api/Ads").subscribe(
      {
        next: (res) => {
          this.AllAds = res
          this.spinner.hide()
          resolve()
          
        },
        error: (err) => {
          console.log(err)
          this.spinner.hide()
        
        }
      }
    )
    
  })

  

}


weather : any = {}

GetWeather(city : string)
{
  return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44390/Api/Weather/CityWeather/"+ city).subscribe(
      {
        next: (res) => {
          this.weather = res
           console.log(this.weather) ;
          this.spinner.hide()
          resolve()
          
        },
        error: (err) => {
          console.log(err)
          this.spinner.hide()
        
        }
      }
    )
    
  })

  

}

//isAddedToWishlist: boolean = false;
addFavoruit(obj : any)
{

  
 
  this.spinner.show()
  this.http.post("https://localhost:44390/api/FavouriteNews" , obj).subscribe({
    next:()=>
    {
      this.spinner.hide()
      this.toaster.success("Add to favorite list")
     // this.isAddedToWishlist=true 
      
    },

    error: ()=>
    {
      this.spinner.hide()
      this.toaster.error("Something went wrong, Please try again")
    }
  })
}


removeFavoruit(obj:any)
{
  
  this.spinner.show()
  this.http.delete("https://localhost:44390/api/FavouriteNews/removeFavouritnew",obj).subscribe({
    next:()=>
    {
      this.spinner.hide()
      this.toaster.success("remove to favorite list")
    },

    error: ()=>
    {
      this.spinner.hide()
      this.toaster.error("Something went wrong, Please try again")
    }
  })

}


WishlistUser : any = []
getFavoruitUser(userid : number)
{

  return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44390/api/FavouriteNews/GetNewsFavouritejoin/"+ userid).subscribe(
      {
        next: (res) => {
          this.WishlistUser = res
          this.spinner.hide()
          resolve()
          
        },
        error: (err) => {
          console.log(err)
          this.spinner.hide()
        
        }
      }
    )
    
  })



}


CreateTestimonial(test : any)
{
  return new Promise<void>((resolve, reject) => {

    this.spinner.show()
    this.http.post("https://localhost:44390/api/TestmonialNews/AddTestimonials",test).subscribe(
      {
        next: () => {
          this.spinner.hide()
          this.toaster.success("Add Testimonial  Successfully")
          resolve();
        },
        error: () => {
          this.spinner.hide()
          this.toaster.error("Something went wrong, Please try again")
        }
      }
    )
  })

}


spasificAdsUser : any = []

GetAdsUserspac(userid : number)
{
  return new Promise<void>((resolve, reject) => {

    this.spinner.show()
    this.http.get("https://localhost:44390/api/Ads/AcceptShow/" + userid).subscribe(
      {
        next: () => {
          this.spinner.hide()
         this.toaster.success("Add Testimonial  Successfully")
          resolve();
        },
        error: () => {
          this.spinner.hide()
        this.toaster.error("Something went wrong, Please try again")
        }
      }
    )
  })

}



async DeleteAds(ID:number)
{    return new Promise<void>((resolve, reject) => {

  
  
  this.spinner.show()
  this.http.delete("https://localhost:44390/api/Ads/DeleteAds"+ID).subscribe(
    {
      
        next:()=>{
          this.spinner.hide()
          this.toaster.success("delete Successfully")
          resolve()
        },
        error:()=>{
          this.spinner.hide()
          this.toaster.error("error")
        
        }
    }
  )
})

}





addFavoruit2(obj : any)
{
  this.spinner.show()
  this.http.post("https://localhost:44390/api/FavouriteNews/getflag" , obj).subscribe({
    next:()=>
    {
      this.spinner.hide()
      this.toaster.success("Add to favorite list")
     // this.isAddedToWishlist=true 
      
    },

    error: ()=>
    {
      this.spinner.hide()
      this.toaster.error("Something went wrong, Please try again")
    }
  })
}





UpdateFavoruit2(obj : any)
{
  
  this.spinner.show()
  this.http.put("https://localhost:44390/api/FavouriteNews" , obj).subscribe({
    next:()=>
    {
      this.spinner.hide()
     // this.toaster.success("Remove")
     // this.isAddedToWishlist=true 
      
    },

    error: ()=>
    {
      this.spinner.hide()
      this.toaster.error("Something went wrong, Please try again")
    }
  })
}








}