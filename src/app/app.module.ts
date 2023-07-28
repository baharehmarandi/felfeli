import {isDevMode, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgOptimizedImage } from "@angular/common";
import { HeaderProductDropdownComponent } from './shared/header/header-product-dropdown/header-product-dropdown.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MobileHeaderComponent} from "./shared/header/mobile-header/mobile-header.component";
import { MobileHeaderDrawerComponent } from './shared/header/mobile-header/mobile-header-drawer/mobile-header-drawer.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {EnterCodeComponent} from "./pages/sign-in/enter-code/enter-code.component";
import { EnterPhoneComponent } from './pages/sign-in/enter-phone/enter-phone.component';
import { CountDownTimerComponent } from './shared/count-down-timer/count-down-timer.component';
import {ErrorCatchingInterceptor} from "./error-catching.interceptor";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HomeModule} from "./home/home.module";
import {ProductModule} from "./product/product.module";
import { SwiperDirective } from './shared/swiper/swiper.directive';
import { FooterComponent } from './shared/footer/footer.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ModalProfileComponent } from './shared/header/modal-profile/modal-profile.component';
import {StoreModule} from "@ngrx/store";
import {shoppingCardReducer} from "./shopping-card/store/reducers/shopping-card.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ShoppingCardEffects} from "./shopping-card/store/effects/shopping-card.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderProductDropdownComponent,
    MobileHeaderComponent,
    MobileHeaderDrawerComponent,
    HomePageComponent,
    SignInComponent,
    EnterCodeComponent,
    EnterPhoneComponent,
    CountDownTimerComponent,
    FooterComponent,
    ProfileComponent,
    ModalProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    HomeModule,
    ProductModule,
    SwiperDirective,
    StoreModule.forRoot({
      shoppingCard: shoppingCardReducer
    }),
    EffectsModule.forRoot([ShoppingCardEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorCatchingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
