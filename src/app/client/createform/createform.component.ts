import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Client} from '../../shared/client';
import {ClientService} from '../../services/client.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.scss']
})

export class CreateformComponent implements OnInit {

    client = new Client();

  constructor(private route: Router , private serve: ClientService , public dialogRef: MatDialogRef<CreateformComponent>) { }

  ngOnInit() {

  }


  onSubmited() {

    this.serve.CreateList(this.client).subscribe(res => {
      console.log(res);

      this.dialogRef.close();
      location.reload();

    });

    // console.log('verificando....');
    // this.dialogRef.close();

  }


}
