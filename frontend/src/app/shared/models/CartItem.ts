import { Food } from "./Food";


export class CartItem{
  constructor(public food:Food){ }
  quentity:number = 1;
  price:number = this.food.price;
}
