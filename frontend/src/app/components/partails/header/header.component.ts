import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartQuentity = 0;
  user!:User;
  constructor(private cartService:CartService, private userService:UserService){
    cartService.getCartObservable().subscribe((newCart)=>{
      this.cartQuentity = newCart.totalCount;
    })

    userService.userObservable.subscribe((newUser)=>{
      this.user = newUser;
    })

  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
   return this.user.token;
  }
}
