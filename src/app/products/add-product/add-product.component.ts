import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProductComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private products: ProductsService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: 0,
      description: ''
    });
  }

  addProduct() {
    const form = this.form.value;

    this.products.addProduct(form);

    this.form.reset();
  }
}
