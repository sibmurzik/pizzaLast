import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../../core/auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public loggedState: boolean = false;
  constructor(public cartService: CartService, private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.isLogged$.subscribe(isLoggedIn => {
      this.loggedState = isLoggedIn;
      console.log('State has been changed: ' + isLoggedIn);

    })
  }


  login(): void {
    this.authService.logIn();
  }
  logout(): void {
    this.authService.logOut();
  }

}
