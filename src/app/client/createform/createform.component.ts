import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Client} from '../../shared/client';


@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.scss']
})

export class CreateformComponent implements OnInit {

   client: any = {} ;


  constructor(public dialogRef: MatDialogRef<CreateformComponent>) { }

  ngOnInit() {

    console.log(this.client);
  }


  onSubmit() {

    this.dialogRef.close();
  }
}
