import { Component } from '@angular/core';
import { OwlOptions} from 'ngx-owl-carousel-o';
import { HomeService } from 'src/app/home.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule ,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.css']
})
export class ShowNewsComponent {

 

//  addToFavo : boolean = false;

  // bgColor = ['red'];

  // onClick(index : number) {
  //   this.bgColor[index] = 'green';
 
  // }
 

  // isLiked = false;

  // likeButtonClicked() {
  //   this.isLiked = !this.isLiked;
  // }


  constructor(public homeService : HomeService , private router : Router,public authService : AuthService,library: FaIconLibrary  ,private toaster: ToastrService){
    library.addIconPacks(fas, far);
  }

  Types = Object.values(Type);
  imageUrl: string = ''
  isFas = false;
 
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }


  userlog = 0 ;

 async ngOnInit()
{
 this.homeService.GetAllArtical();

 this.homeService.GetAllTypeAds();

 await this.homeService.GetAllAds();

 await this.homeService.GetWeather('Amman')

 let user:any = localStorage.getItem('user')
  user = JSON.parse(user);
  this.userlog = Number(user.regid);
  console.log(this.userlog);
  
}

 async getNews(type : string)
{
  await this.homeService.TypeArticals(type);
  console.log(type)
}

GetIdAdsType(item: any)
{
  this.router.navigate(['/user/addads/'+ item.typeid]);
  console.log(item.typeid);
  
   
}


wishlistState: {[articalId: number]: boolean} = {};


toggleWishlist(item: any) {
  if (this.wishlistState[item.articalid]) {
    this.handleAddAToFavo(item);
  } else {
    this.handleRemoveAToFavo(item);
  
  
  }
}


handleAddAToFavo(item : any)
{
    let obj : any =
    {
       "userid4" : this.userlog,
       "articleid2" : item.articalid,
       "flag" : 1
    }
    this.homeService.addFavoruit(obj);
    console.log(obj); 
    this.wishlistState[item.articalid] = true
 
}

handleRemoveAToFavo(item : any)
{ 
   const isAdded = this.wishlistState[item.articalid] ? false : true;
  this.wishlistState[item.articalid] = !isAdded;

  let obj2 : any =
  {
    "articleid2" : item.articalid,
     "userid4" : this.userlog,
     "flag" : Number(isAdded) 
  }
  this.homeService.UpdateFavoruit2(obj2);
  console.log(obj2); 
  this.wishlistState[item.articalid] = false ;

}





}


enum Type {
  World = 'World',
  Jordan = 'Jordan',
  Sport = 'Sport',
  

}

