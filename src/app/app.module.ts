import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule, MatDialogConfig} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { AdminComponent } from './components/admin/admin.component';
import { NewFilmDialogComponent } from './components/new-film-dialog/new-film-dialog.component';
import { Er404Component } from './components/er404/er404.component';

@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponent,
    AdminComponent,
    NewFilmDialogComponent,
    Er404Component
  ],
  entryComponents: [NewFilmDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, RouterModule,
    BrowserAnimationsModule
  ],
  providers: [MatDialogConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
