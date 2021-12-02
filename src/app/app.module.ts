import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ItemsComponent } from './items/items.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { LogoComponent } from './logo/logo.component';
import { NameFilterPipe } from './pipes/name-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ItemsComponent,
    LogoComponent,
    NameFilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
