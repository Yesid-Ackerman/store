import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
// img="https://picsum.photos/640/640?r=" + Math.random();
  @Input({required:true}) img: string ='';
  @Input({required:true}) price: number =0;
  @Input({required:true}) tittle: string =''; 

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log('Click From Child');
    this.addToCart.emit('Hola desde Hijo' + this.tittle);
  }
}
