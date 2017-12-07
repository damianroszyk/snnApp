import { Component, ChangeDetectionStrategy, Input, OnChanges, ViewChild } from '@angular/core';
import { Product, ProductsService } from '../products.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnChanges {
  dataSource: MatTableDataSource<Product>;
  @Input() products: Product[] = [];
  displayedColumns = ['productID', 'name', 'price', 'description', 'remove'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private pservice: ProductsService) { }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.products);
    this.dataSource.sort = this.sort;
    if (this.products) {
      this.dataSource.paginator = this.paginator;
    }
  }

  removeProduct(id: number) {
    this.pservice.deleteProduct(id);
  }
}
