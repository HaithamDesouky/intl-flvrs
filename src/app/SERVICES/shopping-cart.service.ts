import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shopping_cart_items: any[] = [];

  constructor() {}

  // handleChangeInQuantity = (lootBox, value) => {
  //   const basketClone = [...this.state.basket];
  //   const existingLootBox = basketClone.find(
  //     item => item.lootBox.name === lootBox.name
  //   );

  //   if (existingLootBox) {
  //     const editedLootBox = { ...existingLootBox };
  //     editedLootBox.quantity += value;
  //     const index = basketClone.indexOf(existingLootBox);
  //     if (editedLootBox.quantity > 0) {
  //       basketClone.splice(index, 1, editedLootBox);
  //     } else {
  //       basketClone.splice(index, 1);
  //     }
  //   } else if (value > 0) {
  //     const newLootBox = {
  //       lootBox,
  //       quantity: 1
  //     };
  //     basketClone.push(newLootBox);

  addProduct = (product: any) => {
    let items = this.get_shopping_cart_items();

    if (!items) {
      this.shopping_cart_items.push({ name: product.name, quantity: 1 });
      localStorage.setItem(
        'shopping_cart',
        JSON.stringify(this.shopping_cart_items)
      );
    } else {
      if (items) {
        let existingItem = items.find(
          (single: any) => single.name == product.name
        );

        if (existingItem) {
          console.log(existingItem, 'running');
          const updatedItem = { ...existingItem };
          updatedItem.quantity++;
          const indexOfExistingItem = items.indexOf(existingItem);

          items.splice(indexOfExistingItem, 1);
          items.push(updatedItem);
          localStorage.setItem('shopping_cart', JSON.stringify(items));
        }

        if (!existingItem) {
          items.push({ name: product.name, quantity: 1 });
          localStorage.setItem('shopping_cart', JSON.stringify(items));
        }
      }
    }
  };

  get_shopping_cart_items = () => {
    let items = localStorage.getItem('shopping_cart');
    return JSON.parse(items!);
  };

  getCartLength = () => {
    let items = this.get_shopping_cart_items();
    return items ? this.get_shopping_cart_items().length : 0;
  };

  getTotal = () => {
    let items = this.get_shopping_cart_items();
    return items?.reduce((acc: any, item: any) => acc + item.price, 0);
  };

  removerItem = (p: any) => {
    console.log('calling remover ', p);
    let items = this.get_shopping_cart_items();

    const index = items.findIndex((item: any) => item.id == p.id);
    if (index >= 0) {
      console.log('hitting if');
      items.splice(index, 1);
      return localStorage.setItem('shopping_cart', JSON.stringify(items));
    }
  };
}
