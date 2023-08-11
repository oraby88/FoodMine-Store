import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partails/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/partails/search/search.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { TagsComponent } from './components/partails/tags/tags.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partails/title/title.component';
import { NotFoundComponent } from './components/partails/not-found/not-found.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
// import {MDBBootstrapModule} from '.angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { InputContainerComponent } from './components/partails/input-container/input-container.component';
import { InputValidationComponent } from './components/partails/input-validation/input-validation.component';
import { TextInputComponent } from './components/partails/text-input/text-input.component';
import { DefaultButtonComponent } from './components/partails/default-button/default-button.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { LoadingComponent } from './components/partails/loading/loading.component'
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { OrderItemsListComponent } from './components/partails/order-items-list/order-items-list.component';
import { MapComponent } from './components/partails/map/map.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { PaypalButtonComponent } from './components/partails/paypal-button/paypal-button.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { StarRatingComponent } from './components/partails/star-rating/star-rating.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    TagsComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent,
    LoadingComponent,
    CheckoutPageComponent,
    OrderItemsListComponent,
    MapComponent,
    PaymentPageComponent,
    PaypalButtonComponent,
    OrderTrackPageComponent,
    StarRatingComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toastr-bottom-right',
      newestOnTop:false
    })
    // RatingModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor , multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
