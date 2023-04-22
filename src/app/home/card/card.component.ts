import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() Id? : number
@Input() productName ?: string
@Input() productDescription?: string
@Input() productImage ?: string


@Output () SendValues= new EventEmitter()

SendSelectedProduct(Id?: number,  image?: string ,name?:string, description?: string)
{
  const product=
  {
    Id : Id,
    prodctimage:image,
    producctname:name,
    productdescription:description
  }
this.SendValues.emit(product)
}

}
