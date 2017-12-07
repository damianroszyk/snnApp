import { NgModule } from '@angular/core';
import {
  MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule,
  MatSortModule, MatPaginatorModule, MatToolbarModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class SharedModule { }
