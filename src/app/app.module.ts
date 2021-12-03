import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ItemsComponent } from './items/items.component';
import {HttpClientModule} from "@angular/common/http";
import { LogoComponent } from './logo/logo.component';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ItemDetailComponent } from './item-detail/item-detail.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ItemsComponent,
    LogoComponent,
    NameFilterPipe,
    ItemDetailComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
