import { UpdateClientComponent } from './update-client/update-client.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';

const routes: Routes = [
  {path: 'clients', component: ClientListComponent},
  {path: 'create-client', component: CreateClientComponent},
  {path: '', redirectTo: 'clients', pathMatch: 'full'},
  {path: 'update-client/:id', component: UpdateClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
