import { Component, OnInit } from '@angular/core';
import {Item} from "../model/item";
import {ItemService} from "../services/item.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemFormValidator} from "../model/item-form-validator";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  searchText: string = '';

  itemFormValidator : ItemFormValidator | any = new ItemFormValidator();

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  onSubmit(): void {
    console.log(this.itemFormValidator.itemForm)
    this.itemService.addItem(this.itemFormValidator.itemForm.value).subscribe(data => {
      console.log('message::::', data);
      this.itemFormValidator.itemForm.reset();
      this.getItems();
    });
  }
}
