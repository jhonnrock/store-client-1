import { Component, OnInit } from '@angular/core';
import {Client} from '../shared/client';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CreateformComponent} from './createform/createform.component';
import {ClientService} from '../services/client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})



export class ClientComponent implements OnInit {
  clients: Client[];
  showbody: boolean;
   displayedColumns: string[] = ['firstNameClient', 'name', 'weight', 'symbol', 'symbol2', 'symbol3'];


  constructor(public dialog: MatDialog, private serve: ClientService) { }

  ngOnInit() {
    this.serve.listofclient().subscribe(myclient => {
        this.clients = myclient;
        console.log(this.clients);

     });


  }
    openCreateClient() {

    console.log('probando..');

    this.dialog.open(CreateformComponent, {width: '500px', height: '450px'});

  }

  showBody() {

    console.log('view container');
    this.showbody = !this.showbody;
  }



}
