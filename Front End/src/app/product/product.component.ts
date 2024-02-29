import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule , Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ ReactiveFormsModule , CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  addProductForm:any;
  editProductForm:any;
  productID:any;
  Products : any = [];
  constructor( private productService:ProductService ) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.addProductForm= new FormGroup({
      name: new FormControl(null,[Validators.required]),
      price: new FormControl(null,[Validators.required]),
      category: new FormControl(""),
      desc: new FormControl(""),
    });

    this.editProductForm= new FormGroup({
      name: new FormControl(null,[Validators.required]),
      price: new FormControl(null,[Validators.required]),
      category: new FormControl(),
      desc: new FormControl(),
    });

  }
  get new_name() { return this.addProductForm.get('name'); }
  get new_price() { return this.addProductForm.get('price'); }
  get edit_name() { return this.editProductForm.get('name'); }
  get edit_price() { return this.editProductForm.get('price'); }


  getAllProducts(){
    this.productService.GetProducts().subscribe(res=>{
      this.Products=res;
    })
    
  }
  addProduct() {
    let product ={
      name:this.addProductForm.value.name,
      price:this.addProductForm.value.price,
      category:this.addProductForm.value.category,
      description:this.addProductForm.value.desc,
    }
    this.productService.AddProduct(product).subscribe(res=>{
      this.getAllProducts();
    })
  }
  // Providing the Edit-Modal with data
  show(id:number,index:number){
    this.productID=id;
    this.editProductForm.controls.name.setValue(this.Products[index].name);
    this.editProductForm.controls.price.setValue(this.Products[index].price);
    this.editProductForm.controls.category.setValue(this.Products[index].category);
    this.editProductForm.controls.desc.setValue(this.Products[index].description);
  }
  updateProduct() {
    let product ={
      id:this.productID,
      name:this.editProductForm.value.name,
      price:this.editProductForm.value.price,
      category:this.editProductForm.value.category,
      description:this.editProductForm.value.desc,
    }
    this.productService.UpdateProduct(this.productID , product).subscribe(res=>{
      this.getAllProducts();
    })
  }
  deleteproduct(id:number){
    this.productService.DeleteProduct(id).subscribe(res=>{
      this.getAllProducts();
    })
  }
}
