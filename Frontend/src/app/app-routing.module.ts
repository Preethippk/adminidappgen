import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
// import { AuthGuard } from './auth.guard';
// import { AddbookComponent } from './addbook/addbook.component';
import { UpdateComponent } from './update/update.component';
 import { FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { BatchComponent } from './batch/batch.component';
import { ConfirmcheckComponent } from './confirmcheck/confirmcheck.component';
import { NewComponent } from './new/new.component';




const routes: Routes = [
                        {path:'',component:HomeComponent},
                      //  {path:"book",component:BooksComponent},
                      // {path:"addbook",component:AddbookComponent},
                      {path:"confirmcheck",component:ConfirmcheckComponent},
                      {path:"batch",component:BatchComponent},
                      {path:"new",component:NewComponent},


                      
                       {path:"update",component:UpdateComponent}]
                      

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
