import {FormControl, FormGroup, Validators} from "@angular/forms";

export class ItemFormValidator {

  counter: number = 255;
  status: boolean = true;
  show: boolean = false;

  constructor() {
  }
  itemForm = new FormGroup({
    'name': new FormControl({value: null, disabled: this.show}, [
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

  descriptionCounter(event: any) {
    if(event.target.value.length >255){
      this.counter = 0;
      this.status = false;
      return
    }
    this.counter = 255 - event.target.value.length
  }
}
