import { Component, Inject, Input } from '@angular/core';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Projekcija } from '../model/projekcija';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cart-overview',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart-overview.component.html',
  styleUrl: './cart-overview.component.css'
})
export class CartOverviewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public cart: Projekcija[]){

  }
}
