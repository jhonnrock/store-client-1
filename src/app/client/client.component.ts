import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';
import {Client} from '../shared/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients: Client[];

  constructor(private serve: ClientService) { }

  ngOnInit() {
    this.serve.listofclient().subscribe(myclient => {
          this.clients = myclient;
          console.log(this.clients);
    });

  }

  // NewClient(){
  //       this.router.navigate([] )
  // }


}
