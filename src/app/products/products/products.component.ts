import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '../products.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  constructor(private auth: AuthenticationService, public products: ProductsService) { }

  ngOnInit() {
    this.products.getProducts();
  }

  logout() {
    this.auth.logout();
  }

}
