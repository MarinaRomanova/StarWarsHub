import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { Er404Component } from './components/er404/er404.component';


const routes: Routes = [
  { path: '', component: FirebaseComponent},
  { path: 'admin', component: AdminComponent },
  { path: "**", component: Er404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
