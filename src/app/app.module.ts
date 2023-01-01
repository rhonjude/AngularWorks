import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PentHouse } from './penthouse.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlatListComponent } from './flats/flat-list.component';
import { AnimalComponentComponent } from './animals/animal-component.component';
import { FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponentComponent } from './product/product-component.component';
import { StarComponentComponent } from './star/star-component.component';
import { CartComponentComponent } from './cart/cart-component.component';
import { RepeatPipe } from './repeat.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponentComponent } from './navbar/navbar-component.component';
import { EventListComponentComponent } from './eventlist/event-list-component.component';
import { EventDetailsComponentComponent } from './eventdetails/event-details-component.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EventDbService } from 'shared/inmemoryeventdbservice';
import { EmojiDirectivesDirective } from './emoji-directives.directive';
import { EmployeeComponentComponent } from './employee/employee-component.component';
import { TrusteeComponentComponent } from './trustee/trustee-component.component';
import { GetValidationDirective } from './get-validation.directive';
import { BooksComponentComponent } from './books/books-component.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PentHouse,
    WelcomeComponent,
    FlatListComponent,
    AnimalComponentComponent,
    ProductComponentComponent,
    StarComponentComponent,
    CartComponentComponent,
    RepeatPipe,
    NavbarComponentComponent,
    EventListComponentComponent,
    EventDetailsComponentComponent,
    EmojiDirectivesDirective,
    EmployeeComponentComponent,
    TrusteeComponentComponent,
    GetValidationDirective,
    BooksComponentComponent,
    AboutUsComponent,
    HomeComponent,
    PageNotFoundComponent,
    AnimalDetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(EventDbService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
