import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { products } from '../main/main.component';
//import { MainComponent } from '../main/main.component';
import { NgxSpinnerService } from 'ngx-spinner';





@Component({
  selector: 'app-details-new',
  templateUrl: './details-new.component.html',
  styleUrls: ['./details-new.component.css']
})
export class DetailsNewComponent implements OnInit {
   
    id: number = 0;
   name: string = '';
   description: string = '';
   image: string = '';
   news : any ;
    constructor(private route: ActivatedRoute,private spinner: NgxSpinnerService) {}

    ngOnInit(): void {
     this.route.params.subscribe(params=>{
       const id = params['Id'] });
         

       this.spinner.show();

       setTimeout(() => {
         
         this.spinner.hide();
       }, 3000);
       // console.log(id);

      // this.route.queryParams.subscribe(params => {
       // this.news = params;
     // });
      
     this.route.queryParams.subscribe(params => {
      this.id = params['Id'] ;
      this.name = params['productname'];
      this.description = params['description'];
      this.image = params['image'];
      
     });
   
        console.log(this.name);
        
        
        // this.news.image = product?.Image;
        // this.news.name = product?.name;
        // console.log(this.news.name );
        
        // this.news.description = product?.description;
        
      }
    

   
}
