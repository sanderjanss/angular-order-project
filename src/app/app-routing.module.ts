import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from "./items/items.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
