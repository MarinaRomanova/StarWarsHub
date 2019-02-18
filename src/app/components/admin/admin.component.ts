import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import { NewFilmDialogComponent } from '../new-film-dialog/new-film-dialog.component';
import { Film } from 'src/app/classes/film';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  filmList =[];
  title:string;
  director:string;
  image:string;
  opening_crawl:string;
  release_date: Date; 
  film: Film; 

  constructor(private firebase:FirebaseService, public dialog: MatDialog) { }

  ngOnInit() {
    this.filmList = this.firebase.getFilms(); 
  }

 openDialog(): void {
    const dialogRef = this.dialog.open(NewFilmDialogComponent, {
      width: '600px',
      position: {top: '0%', left:'25%'},
      data: {
        title: this.title, director: this.director,
        image: this.image, opening_crawl: this.opening_crawl, 
        release_date: this.release_date}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.film = new Film (result.title, result.director, result.image, result.opening_crawl, result.release_date)
      
      this.firebase.createFilm(this.film)
      this.displayFilms();  
    });    
  }

  delete(item) {
    console.log(item.id);    
    this.firebase.deleteFilm(item.id);
    this.displayFilms();
  }

  displayFilms(){
    this.filmList =[];
    this.filmList = this.firebase.getFilms();
  }

}
