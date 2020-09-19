import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id: number;
  client: Client = new Client();
  constructor(private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.clientService.getClientById(this.id).subscribe(data => {
      this.client = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.clientService.updateClient(this.id, this.client).subscribe( data =>{
      this.goToClientList();
    }, error => console.log(error));
  }  

  goToClientList(){
    this.router.navigate(['/clients']);
  }
}
