import { ProductService } from './../product.service';
import {Router} from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product ={
    name: '', 
    price: 0.0
      }
  constructor(private productService: ProductService, private router : Router) { }

  ngOnInit(): void {
  }


  createProduct(): void {
    if (this.product.name != '' && this.product.price != 0) {
      this.productService.create(this.product).subscribe(()=>{
      this.productService.exibirOnConsole('Cadastro Realizado Com Sucesso!')
      this.router.navigate(['/products'])
    })
    } else {
      this.productService.exibirOnConsole('Pruduto Nulo!')
      this.router.navigate(['/product-create'])
    }
    
    
  }

  
  fazerAlgo2(): void {
    this.productService.exibirOnConsole('Cancelado Com Sucesso!')
    this.router.navigate(['/products'])

  }
  

}
