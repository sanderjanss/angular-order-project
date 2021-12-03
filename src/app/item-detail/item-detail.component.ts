import { Component, OnInit } from '@angular/core';
import {ItemService} from "../services/item.service";
import {ActivatedRoute} from "@angular/router";
import {Item} from "../model/item";
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item | any;

  constructor(private itemService : ItemService, private route : ActivatedRoute, private location : Location) { }

  ngOnInit(): void {
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

}
