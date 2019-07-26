import { Component, Input  } from '@angular/core';
import { FirebaseServiceService } from './firebase-service.service';
import { PartesModel } from './model/partes.model';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import {MatDatepickerInputEvent, MatDatepicker} from '@angular/material/datepicker';
import { NgForm } from '@angular/forms';
import { formatDate, DatePipe } from '@angular/common';
import { Auth } from './Auth/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admin';
  hiddenApp = true;
  user: string;
  pass: number;
  pipe = new DatePipe('es-ES');
  dateStart: number = Date.now();
  dateEnd: number = Date.now();

  partes: PartesModel [] = [];
  partesCopy: PartesModel [] = [];
  displayedColumns: string[] = [ 'cliente', 'fecha',
                                'horaEntrada', 'horaSalida',
                                'lugar', 'tipoDeTrabajo', 'totalHoras',
                                'trabajo_realizado'];
  userAsined: string;
  userInvalid = true;
  passInvalid = true;

 
  constructor(private partesService: FirebaseServiceService,
              public dialog: MatDialog,
              private di: DialogComponent,
              public auth: Auth) {

    this.partesService.getPartes()
    .subscribe( resp => {
      console.log(resp);
      this.partes = resp;
      this.partesCopy = resp;
    });
  }

  openDialog(row){
    this.di.openDialog(row);
  }
  
  
  login(){
    this.userInvalid = true;
    this.passInvalid = true;
    if((this.user === this.auth.user) && (Number(this.pass) === this.auth.pass)) {
      this.hiddenApp = false;
    } else{
      if (this.user !== this.auth.user) {
        this.userInvalid = false;
      }
      if (Number(this.pass) !== this.auth.pass) {
        this.passInvalid = false;
      }
      this.hiddenApp = true;
    }

  }

  consultar(){
    this.partes = this.partesCopy;
    this.dateStart = new Date(this.dateStart).getTime();
    this.dateEnd = new Date(this.dateEnd).getTime();

    var idexFilter:any;
    let partesFilter = [];

    for(idexFilter in this.partes) {
      if((this.partes[idexFilter].fecha >= this.dateStart) && (this.partes[idexFilter].fecha <= this.dateEnd)){
        partesFilter.push(this.partes[idexFilter]);
      }
    }
    this.partes = [];
    this.partes = partesFilter;
  }




}
