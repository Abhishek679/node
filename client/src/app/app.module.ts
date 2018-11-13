import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule, Routes } from '@angular/router';
import {
  MatCardModule, MatDialogModule, MatDividerModule, MatIconModule, MatMenuModule,
  MatTabsModule
} from '@angular/material';
import { ContactService } from './service/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { TopComponent } from './top/top.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";

const routes: Routes = [
  {
    path: 'login',
    component: ContactsComponent,
    data: { title: 'LogIn' },
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    TopComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MatCardModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FlexLayoutModule


  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
