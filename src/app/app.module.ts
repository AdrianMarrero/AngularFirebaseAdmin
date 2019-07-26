import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent, DialogOverviewExampleDialog } from './dialog/dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import {MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Auth } from './Auth/auth';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogOverviewExampleDialog
  ],
  entryComponents: [DialogComponent, DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFirestoreModule,
    HttpClientModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    DialogComponent,
    DialogOverviewExampleDialog,
    Auth,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
