import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {HttpClientModule} from  '@angular/common/http';
import { SeriveService } from './serive.service';
import { UpdateComponent } from './update/update.component';
// import { BooksComponent } from './books/books.component';
import { ConfirmcheckComponent } from './confirmcheck/confirmcheck.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BatchComponent } from './batch/batch.component';
import { NewComponent } from './new/new.component';
// import { bookModel } from './batch/bookmodel';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    // BooksComponent,
  
    UpdateComponent,
    ConfirmcheckComponent,
    NavbarComponent,
    BatchComponent,
    NewComponent,
    // bookModel
    // Bookmodel.TsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
],
  providers: [SeriveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
