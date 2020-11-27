import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shopping_cart_items: any[] = [];

  constructor(
    private toast: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  addProduct = (product: any) => {
    let items = this.get_shopping_cart_items();

    if (!items && product.stock > 0) {
      this.shopping_cart_items.push({
        id: product.id,
        name: product.name,
        quantity: 1,
        subtotal: product.price,
        price: product.price,
        image: product.image,
        description: product.description,
        category: product.category,
      });
      localStorage.setItem(
        'shopping_cart',
        JSON.stringify(this.shopping_cart_items)
      );
    } else if (items && product.stock > 0) {
      if (items) {
        let existingItem = items.find(
          (single: any) => single.name == product.name
        );

        if (existingItem) {
          const updatedItem = { ...existingItem };
          updatedItem.quantity++;
          updatedItem.subtotal = updatedItem.quantity * updatedItem.price;
          const indexOfExistingItem = items.indexOf(existingItem);
          items.splice(indexOfExistingItem, 1);
          items.push(updatedItem);
          localStorage.setItem('shopping_cart', JSON.stringify(items));
        } else if (!existingItem) {
          items.push({
            id: product.id,
            name: product.name,
            quantity: 1,
            subtotal: product.price,
            price: product.price,
            image: product.image,
            description: product.description,
            category: product.category,
          });
          localStorage.setItem('shopping_cart', JSON.stringify(items));
        }
      }
    }

    if (product.stock > 0) {
      this.toast.success(
        `${product.name} added to the cart.`,
        'Product Added',
        {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right',
        }
      );
    }

    if (product.stock === 0) {
      this.toast.error(
        `Sorry, ${product.name} is out of stock.`,
        'Out of stock',
        {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right',
        }
      );
    }
  };

  get_shopping_cart_items = () => {
    let items = localStorage.getItem('shopping_cart');
    return JSON.parse(items!);
  };

  getCartLength = () => {
    let items = this.get_shopping_cart_items();
    return items?.reduce((acc: any, item: any) => acc + item.quantity, 0);
  };

  getTotal = () => {
    let items = this.get_shopping_cart_items();
    let total = items?.reduce((acc: any, item: any) => acc + item.subtotal, 0);
    localStorage.setItem('shopping_cart', JSON.stringify(items));
    return total;
  };

  changeQuantity = (product: any, increment: number) => {
    let items = this.get_shopping_cart_items();
    const index = items.findIndex((item: any) => item.name === product.name);
    items[index].quantity = items[index].quantity + increment;
    items[index].subtotal = items[index].quantity * items[index].price;
    if (items[index].quantity === 0) {
      items.splice(index, 1);
    }

    localStorage.setItem('shopping_cart', JSON.stringify(items));
  };

  removeItem = (p: any) => {
    console.log('calling remover ', p);
    let items = this.get_shopping_cart_items();

    const index = items.findIndex((item: any) => item.name == p.name);
    if (index >= 0) {
      console.log('hitting if');
      items[index].quantity -= 1;
      items[index].subtotal = items[index].quantity * items[index].price;

      if (items[index].quantity === 0) {
        items.splice(index, 1);
      }

      this.toast.info(`${p.name} removed from the cart`, 'Product Updated', {
        timeOut: 1500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right',
      });

      return localStorage.setItem('shopping_cart', JSON.stringify(items));
    }
  };

  removeEntireProduct(p: any) {
    let items = this.get_shopping_cart_items();

    const index = items.findIndex((item: any) => item.name == p.name);
    if (index >= 0) {
      console.log('hitting if');
      items.splice(index, 1);

      this.toast.info(`${p.name} removed from the cart`, 'Product Updated', {
        timeOut: 1500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right',
      });

      return localStorage.setItem('shopping_cart', JSON.stringify(items));
    }
  }

  // removeAll(){
  //   return localStorage.removeItem('shopping_cart',);
  // }
}
