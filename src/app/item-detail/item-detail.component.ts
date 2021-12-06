import { Component, OnInit } from '@angular/core';
import {ItemService} from "../services/item.service";
import {ActivatedRoute} from "@angular/router";
import {Item} from "../model/item";
import { Location } from '@angular/common';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemFormValidator} from "../model/item-form-validator";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item | any;
  editableDisabled = true;
  editOrUpdate : string | any;
  itemFormValidator: ItemFormValidator | any = new ItemFormValidator();

  constructor(private itemService : ItemService, private route : ActivatedRoute, private location : Location) { }

  ngOnInit(): void {
    this.editOrUpdate = 'EDIT';
    this.getItem();
  }


  getItem(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }
  goBack(): void {
    this.location.back();
  }

  editToggle(){
    if(this.editOrUpdate === 'EDIT'){
      this.editOrUpdate = 'UPDATE'
    } else {
      this.editOrUpdate = 'EDIT';
    }
    this.editableDisabled = !this.editableDisabled;

  }

  save(): void {
    if (this.item) {
      this.itemService.updateItem(this.item)
        .subscribe(() => this.goBack());
    }
  }

}
