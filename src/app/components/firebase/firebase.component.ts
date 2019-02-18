import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  filmList =[];
  constructor(private firebase:FirebaseService) { }
  ngOnInit() {
   this.filmList = this.firebase.getFilms(); 
  }
}
