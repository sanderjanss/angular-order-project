import { Component, OnInit } from '@angular/core';
import {Item} from "../model/item";
import {ItemService} from "../services/item.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items!: Item[];
  searchText: string = '';
  counter: number = 255;
  status: boolean = true;
  itemForm: FormGroup | any;

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      'name': new FormControl(null, [
        Validators.required
      ]),
      'description': new FormControl(null, [
        Validators.required,
        Validators.maxLength(255)
      ]),
      'price': new FormControl(null, [
        Validators.required,
        Validators.min(0)
      ]),
      'amountOfStock': new FormControl(null, [
        Validators.required,
        Validators.min(0)
      ]),
    });
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  onSubmit(): void {
    console.log(this.itemForm)
    this.itemService.addItem(this.itemForm.value).subscribe(data => {
      console.log('message::::', data);
      this.itemForm.reset();
      this.getItems();
    });
  }

  descriptionCounter(event: any) {
    if(event.target.value.length >255){
      this.counter = 0;
      this.status = false;
      return
    }
    this.counter = 255 - event.target.value.length
  }
}
