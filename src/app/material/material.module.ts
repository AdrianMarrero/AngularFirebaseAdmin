import { NgModule } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatButtonModule, 
         MatToolbarModule, 
         MatGridListModule, 
         MatDatepickerModule, 
         MatNativeDateModule,
         MatTableModule,
         MatSnackBarModule,
         MatDialogModule, 
         MatFormFieldModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatTableModule,
  MatSnackBarModule,
  MatDialogModule,
]
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';


registerLocaleData(localeEs, 'es');

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
  providers: [ { provide: LOCALE_ID, useValue: 'es' }],
})
export class MaterialModule { }
