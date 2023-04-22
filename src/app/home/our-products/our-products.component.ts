import { Component } from '@angular/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent {

  products =[
    {
      name:"Business",
     description:"London fears for its future as companies defect to Wall Street Disney boss Bob Iger talks about the future of Marvel",
     Image:"../../../assets/HomeAssets/assets/img/trending/right2.jpg"


    },
    {
      name:"Technology"
      ,
     description:"the application of scientific knowledge for practical purposes, especially in industry",
     Image:"../../../assets/HomeAssets/assets/img/trending/right4.jpg"
    },
    {
      name:"sport"
      ,
      description:"Premier League news conferences on Friday: De Zerbi responds to Spurs links",
      Image:"../../../assets/HomeAssets/assets/img/trending/right5.jpg"
    }
  ]


}
