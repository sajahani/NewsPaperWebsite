import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toaster: ToastrService , private route : Router) { }


  AllNews: any = []
  GetAllNews() {
    this.spinner.show()
    this.http.get("https://localhost:44390/api/NewsPaper").subscribe(
      {
        next: (res) => {
          this.AllNews = res
          this.spinner.hide()
          this.toaster.success("Success")
        },
        error: (err) => {
          console.log(err)
          this.spinner.hide()
          this.toaster.error("Error")
        }
      }
    )
  }
  


  News: any 
  async GetNewseById(newsid: number)
  {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.get("https://localhost:44390/api/NewsPaper/GetByNewsPaperId/" + newsid).subscribe(
        {
          next: (res) => {
            this.News = res
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
      debugger
      })
}


 async createNews(newsCreat:any)
{   newsCreat.imagenews=this.imageName
  
  return new Promise<void>((resolve, reject) => {

  this.spinner.show()
  this.http.post("https://localhost:44390/api/NewsPaper",newsCreat).subscribe(
  {
    next:()=>{
      this.spinner.hide()
      this.toaster.success("Add Successfully")
      resolve();
    },
    error:()=>{
      this.spinner.hide()
      this.toaster.error("error")
    
    }
})
  })
}








async updateNews(nwes1:any)
{ 
  
  nwes1.imagenews=this.imageName || nwes1.imagenews ;
  
  
  return new Promise<void>((resolve, reject) => {

  
  
  this.spinner.show()
  this.http.put("https://localhost:44390/api/NewsPaper",nwes1).subscribe(
    {
      
        next:()=>{
          this.spinner.hide()
          this.toaster.success("update Successfully")
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
 





async DeleteNews(nwesID:any)
{    return new Promise<void>((resolve, reject) => {

  
  
  this.spinner.show()
  this.http.delete("https://localhost:44390/api/NewsPaper/DeleteNewsPaper/"+ nwesID).subscribe(
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


// ????????????????????????????????????????

AllAdsType: any = []
GetAllAdsType() {
  this.spinner.show()
  this.http.get("https://localhost:44390/api/TypeAd").subscribe(
    {
      next: (res) => {
        this.AllAdsType = res
        this.spinner.hide()
        this.toaster.success("Success")
      },
      error: (err) => {
        console.log(err)
        this.spinner.hide()
        this.toaster.error("Error")
      }
    }
  )
}




AdsType: any 
async GetAdsTypeById(typeid: number)
{
  return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44390/api/TypeAd/GetTypeAdsById/" + typeid).subscribe(
      {
        next: (res) => {
          this.AdsType = res
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



async UpdateTypeAds(type:any)
{    return new Promise<void>((resolve, reject) => {

  
  this.spinner.show()
  this.http.put("https://localhost:44390/api/TypeAd",type).subscribe(
    {
      
        next:()=>{
          this.spinner.hide()
          this.toaster.success("update Successfully")
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





async DeleteTypAds(TypeID:any)
{    return new Promise<void>((resolve, reject) => {

  
  
  this.spinner.show()
  this.http.delete("https://localhost:44390/api/TypeAd/DeleteTypeAds/"+TypeID).subscribe(
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


async createTypeAds(Type:any)
{    return new Promise<void>((resolve, reject) => {

  this.spinner.show()
  this.http.post("https://localhost:44390/api/TypeAd",Type).subscribe(
  {
    next:()=>{
      this.spinner.hide()
      this.toaster.success("Add Successfully")
      resolve();
    },
    error:()=>{
      this.spinner.hide()
      this.toaster.error("error")
    
    }
})
  })
}

imageName =" "
UploadImage(ImageFile :any )
{
  this.http.post("https://localhost:44390/api/Newspaper/uploadImage",ImageFile).subscribe(
    {
      next:(res :any)=>(this.imageName =res.imagenews),
      error:()=>{}    }
  )
}






// _________________


AllHomePage: any = []
GetAllAllHomePage() {
  this.spinner.show()
  this.http.get("https://localhost:44390/api/HomePageNews").subscribe(
    {
      next: (res) => {
        this.AllHomePage = res
        this.spinner.hide()
        this.toaster.success("Success")
      },
      error: (err) => {
        console.log(err)
        this.spinner.hide()
        this.toaster.error("Error")
      }
    }
  )
}




HomePage: any 
async GetHomePageById(homeid: number)
{
  return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44390/api/HomePageNews/GetByHomepagenewsId/" + homeid).subscribe(
      {
        next: (res) => {
          this.HomePage = res
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






async UpdatHomePage(HomePagee:any)
{  
  
 
  HomePagee.logoimg =this.imageName1 || HomePagee.logoimg ;
  
  
  return new Promise<void>((resolve, reject) => {

  
  this.spinner.show()
  this.http.put("https://localhost:44390/api/HomePageNews",HomePagee).subscribe(
    {
      
        next:()=>{
          this.spinner.hide()
          this.toaster.success("update Successfully")
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


imageName1 =" "
UploadImage1(ImageFile :any )
{
  this.http.post("https://localhost:44390/api/HomePageNews/uploadLogo",ImageFile).subscribe(
    {
      next:(res :any)=>(this.imageName1 =res.logoimg),
      error:()=>{}    }
  )
}





 imageName2 =" "
UploadImage2(ImageFile :any )
{
  this.http.post("https://localhost:44390/api/HomePageNews/uploadImage1",ImageFile).subscribe(
    {
      next:(res :any)=>(this.imageName2 =res.homeimg),
      error:()=>{}    }
  )
}





async DeleteHomePage(HomeID:any)
{    return new Promise<void>((resolve, reject) => {

  
  
  this.spinner.show()
  this.http.delete("https://localhost:44390/api/HomePageNews/DeleteHomepagenews/"+HomeID).subscribe(
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


async createHomePagee(homePaage:any)
{   
  homePaage.logoimg=this.imageName
  // homePaage.homeimg=this.imageName2

  
  return new Promise<void>((resolve, reject) => {

  this.spinner.show()
  this.http.post("https://localhost:44390/api/HomePageNews",homePaage).subscribe(
  {
    next:()=>{
      this.spinner.hide()
      this.toaster.success("Add Successfully")
      resolve();
    },
    error:()=>{
      this.spinner.hide()
      this.toaster.error("error")
    
    }
})
  })
}





AllNumOfAds: any = {}

GetAllNumOfAds() {
  this.spinner.show()
  this.http.get("https://localhost:44390/api/Ads/NumberOfAds").subscribe(
    {
      next: (res) => {
        this.AllNumOfAds = res
        console.log(res)
        this.spinner.hide()
        this.toaster.success("Success")
      },
      error: (err) => {
        console.log(err)
        this.spinner.hide()
        this.toaster.error("Error")
      }
    }
  )
}



AllNumOfUser: any = {}

GetAllNumOfUser() {
  this.spinner.show()
  this.http.get("https://localhost:44390/api/RegistrationNews/NumberOfUser").subscribe(
    {
      next: (res) => {
        this.AllNumOfUser = res
        console.log(res)
        this.spinner.hide()
        this.toaster.success("Success")
      },
      error: (err) => {
        console.log(err)
        this.spinner.hide()
        this.toaster.error("Error")
      }
    }
  )
}


AllRegestrationAdminProfile: any = []
GetAllRegestrationAdminProfile() {
  this.spinner.show()
  this.http.get("https://localhost:44390/api/RegistrationNews").subscribe(
    {
      next: (res) => {
        this.AllRegestrationAdminProfile = res
        this.spinner.hide()
        this.toaster.success("Success")
      },
      error: (err) => {
        console.log(err)
        this.spinner.hide()
        this.toaster.error("Error")
      }
    }
  )
}



RegesterAdminProfile: any 
async GetRegesterAdminProfileById(regid: number)
{
  return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44390/api/RegistrationNews/GetRegistrationNewsById/" + regid).subscribe(
      {
        next: (res) => {
          this.RegesterAdminProfile = res
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

async updateRegesterAdminProfile(Register1:any)
{ 
  

  
  return new Promise<void>((resolve, reject) => {

  
  
  this.spinner.show()
  this.http.put("https://localhost:44390/api/RegistrationNews",Register1).subscribe(
    {
      
        next:()=>{
          this.spinner.hide()
          this.toaster.success("update Successfully")
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



userProfile: any 
async GetuserProfileById(userid: number=1)
{
  // userid = 1;

  return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44390/api/RegistrationNews/GetRegistrationNewsById/" + 1).subscribe(
      {
        next: (res) => {
          this.userProfile = res
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

lastFiveRegistrations: any = []
GetlastFiveRegistrations() {
  this.spinner.show()
  this.http.get("https://localhost:44390/api/RegistrationNews/lastFiveRegistrations").subscribe(
    {
      next: (res) => {
        this.lastFiveRegistrations = res
        this.spinner.hide()
        this.toaster.success("Success")
      },
      error: (err) => {
        console.log(err)
        this.spinner.hide()
        this.toaster.error("Error")
      }
    }
  )
}




ViewPublisherInAdmin: any = []
GetAllViewPublisherInAdmin() {
  this.spinner.show()
  this.http.get("https://localhost:44390/api/RegistrationNews/GetPublisher").subscribe(
    {
      next: (res) => {
        this.ViewPublisherInAdmin = res
        this.spinner.hide()
        this.toaster.success("Success")
      },
      error: (err) => {
        console.log(err)
        this.spinner.hide()
        this.toaster.error("Error")
      }
    }
  )
}




async UpdatePublisherStatus(publisherObj:any)
{ 
  

  
  return new Promise<void>((resolve, reject) => {

  
  
  this.spinner.show()
  this.http.post("https://localhost:44390/api/RegistrationNews/sendEmailPublisher",publisherObj).subscribe(
    {
      
        next:()=>{
          this.spinner.hide()
          this.toaster.success("update Successfully and Send Email ")
          resolve()
        },
        error:(err)=>{
          this.spinner.hide()
          this.toaster.error(err)
          console.log(err);

        }
    }
  )
})

}



AllArtical: any = []
GetAllArtical() {
  this.spinner.show()
  this.http.get("https://localhost:44390/api/Articals/GetAllArticalsAdmin").subscribe(
    {
      next: (res) => {
        this.AllArtical = res
        this.spinner.hide()
        this.toaster.success("Success")
      },
      error: (err) => {
        console.log(err)
        this.spinner.hide()
        this.toaster.error("Error")
      }
    }
  )
}

async UpdateArticleStatus(ArtObj:any)
{  
  
  
  return new Promise<void>((resolve, reject) => {

  
  this.spinner.show()
  this.http.post("https://localhost:44390/api/Articals/sendEmail",ArtObj).subscribe(
    {
      
        next:()=>{
          this.spinner.hide()
          this.toaster.success("update Successfullyand Send Email")
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




 Articalss :any
async GetByArticalId(Articalsid: number)
{
  return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44390/api/Articals/GetByArticalId/" + Articalsid).subscribe(
      {
        next: (res) => {
          this.Articalss = res
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

AllAds: any = []
GetAllAds() {
  this.spinner.show()
  this.http.get("https://localhost:44390/api/Ads/GetAllAdsUser").subscribe(
    {
      next: (res) => {
        this.AllAds = res
        this.spinner.hide()
        this.toaster.success("Success")
      },
      error: (err) => {
        console.log(err)
        this.spinner.hide()
        this.toaster.error("Error")
      }
    }
  )
}
    


async UpdateADSstatus(AdsObj:any)
{  
  
  
  return new Promise<void>((resolve, reject) => {

  
  this.spinner.show()
  this.http.post("https://localhost:44390/api/Ads/sendEmailAds",AdsObj).subscribe(
    {
      
        next:()=>{
          this.spinner.hide()
          this.toaster.success("update Successfullyand Send Email")
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




private apiUrl = 'https://localhost:44390/Api/NewsPaper/ChatArticleNews';
getData(): Observable<any> {
  return this.http.get<any>(this.apiUrl);
   
}











// chartData: any = []
// GetallChatArticleNews() {
//   this.spinner.show()
//   this.http.get("https://localhost:44390/api/NewsPaper/ChatArticleNewsNews").subscribe(
//     {
//       next: (res) => {
//         this.chartData = res
//         console.log(this.chartData)
//         this.spinner.hide()
//         this.toaster.success("Success")
//       },
//       error: (err) => {
//         console.log(err)
//         this.spinner.hide()
//         this.toaster.error("Error")
//       }
//     }
//   )
// }















AlltestmonialNews: any = []
GetAlltestmonialNews() {
  this.spinner.show()
  this.http.get("https://localhost:44390/api/TestmonialNews").subscribe(
    {
      next: (res) => {
        this.AlltestmonialNews = res
        this.spinner.hide()
        this.toaster.success("Success")
      },
      error: (err) => {
        console.log(err)
        this.spinner.hide()
        this.toaster.error("Error")
      }
    }
  )
}

async UpdatetestmonialNews(testmonialNews:any)
{ 
  

  
  return new Promise<void>((resolve, reject) => {

  
  
  this.spinner.show()
  this.http.put("https://localhost:44390/api/TestmonialNews",testmonialNews).subscribe(
    {
      
        next:()=>{
          this.spinner.hide()
          this.toaster.success("update Successfully")
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



// getPrices(search: any): Observable<any[]> {
//   return this.http.post<any[]>("https://localhost:44390/api/PaymentNews/Search",search);
// }




SearchReport: any = []
GetSearchReport(search: any) {
  return new Promise<void>((resolve, reject) => {

    this.spinner.show()
    this.http.post("https://localhost:44390/api/PaymentNews/Search", search).subscribe(
      {
        next: (res) => {
          this.SearchReport = res
          this.spinner.hide()
          this.toaster.success("Added Successfully")
         // resolve()
        },
        error: (err) => {
          this.spinner.hide()
          this.toaster.error("error")
        }
      }
    )

  })
  debugger
}





AllContactUsNews: any = []
GetAllContactUsNews() {
  this.spinner.show()
  this.http.get("https://localhost:44390/api/ContactUsNews").subscribe(
    {
      next: (res) => {
        this.AllContactUsNews = res
        this.spinner.hide()
        this.toaster.success("Success")
      },
      error: (err) => {
        console.log(err)
        this.spinner.hide()
        this.toaster.error("Error")
      }
    }
  )
}




ContactusnewsId: any 
async GetContactusnewsId(contactid: number)
{
  return new Promise<void>((resolve, reject) => {
    this.spinner.show()
    this.http.get("https://localhost:44390/api/ContactUsNews/GetByContactusnewsId/" + contactid).subscribe(
      {
        next: (res) => {
          this.ContactusnewsId = res
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



async UpdateContactUsNews(ContactUsNews:any)
{    return new Promise<void>((resolve, reject) => {

  
  this.spinner.show()
  this.http.put("https://localhost:44390/api/ContactUsNews",ContactUsNews).subscribe(
    {
      
        next:()=>{
          this.spinner.hide()
          this.toaster.success("update Successfully")
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





async DeleteContactUsNews(ContactUsNewsID:any)
{    return new Promise<void>((resolve, reject) => {

  
  
  this.spinner.show()
  this.http.delete("https://localhost:44390/api/ContactUsNews/DeleteContactusnews/"+ContactUsNewsID).subscribe(
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


async createContactUsNews(ContactUs:any)
{    return new Promise<void>((resolve, reject) => {

  this.spinner.show()
  this.http.post("https://localhost:44390/api/ContactUsNews",ContactUs).subscribe(
  {
    next:()=>{
      this.spinner.hide()
      this.toaster.success("Add Successfully")
      resolve();
    },
    error:()=>{
      this.spinner.hide()
      this.toaster.error("error")
    
    }
})
  })
}



private apiUrlChart2 = 'https://localhost:44390/Api/TypeAd/ChartAdsType';
getData2(): Observable<any> {
  return this.http.get<any>(this.apiUrlChart2);
   
}






AllUsers: any = []
GetAllUsers() {
  this.spinner.show()
  this.http.get("https://localhost:44390/api/RegistrationNews").subscribe(
    {
      next: (res) => {
        this.AllUsers = res
        this.spinner.hide()
        this.toaster.success("Success")
      },
      error: (err) => {
        console.log(err)
        this.spinner.hide()
        this.toaster.error("Error")
      }
    }
  )
}



}
