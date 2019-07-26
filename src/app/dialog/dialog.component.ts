import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


export interface DialogData {
  cliente: string;
  firmante: string;
  horaEntrada: string;
  horaSalida: string;
  lugar: string;
  firma: string;
  tipoDeTrabajo: string;
  totalHoras: string;
  trabajo_realizado: string;
  fecha: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  constructor(public dialog: MatDialog) { 
  }
  public data: DialogData;
  

  ngOnInit() {
  }

  openDialog(row) {

    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '650px',
      height: '400px',
      data: {fecha: row.fecha,
            firmante: row.firmante,
            horaEntrada: row.horaEntrada,
            horaSalida: row.horaSalida,
            lugar: row.lugar,
            firma: row.firma,
            tipoDeTrabajo: row.tipoDeTrabajo,
            totalHoras: row.totalHoras,
            trabajo_realizado: row.trabajo_realizado }
    });

  }
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.component.html',
})
// tslint:disable-next-line: component-class-suffix
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
