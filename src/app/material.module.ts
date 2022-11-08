import { NgModule } from '@angular/core';

//Material
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';

const MaterialComponents: any[] = [
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatSelectModule,
  MatDialogModule,
  MatButtonModule,
  MatMenuModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDividerModule
]

@NgModule({
  declarations: [],
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
