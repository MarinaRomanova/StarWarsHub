import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/Operators';
import { Film } from '../classes/film';
import { ToastrService } from 'ngx-toastr';
import { pipe } from '@angular/core/src/render3';
import { async } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  selectedFilm: Film;
  

  constructor(private afs: AngularFirestore, private toastr:ToastrService) { }

  getFilms() : any  {   
    var films = [];
    var ids;
    this.afs.collection<Film>('articles').snapshotChanges().pipe(
      map(changes => {
        return changes.map(change => {
          const data = change.payload.doc.data();
          const id = change.payload.doc.id;
          return { id, ...data };
      });
    }
 )).subscribe(changes => {
       ids = changes;
       console.log(ids);
       
});
    var i= 0;
    this.afs.collection<Film>('articles')
        .valueChanges().subscribe(data => {
          data.forEach(item => {
            
            var film = new Film(item.title, item.director, item.image, item.opening_crawl.replace(/(\\r\\n|\\r|\\n)/gm, " "), item.release_date);
            film.id =ids[i].id;
            films.push(film);
            console.log(ids[i].id); 
            i++;           
          });            
        });
    return films; 

  }
  getObject(film : Film) : any {
    var article: any;
    article = Object.assign({}, {
    title: film.title,
    director: film.director,
    image: film.image,
    opening_crawl: film.opening_crawl,
    release_date: film.release_date
});
    return article;
  }

  createFilm (film : Film){ 
    this.toastr.success('Film was successfully added', 'New Film');
    this.afs.collection('articles').add(this.getObject(film));  
  }

  deleteFilm (id) {
    if(confirm("Are you sure you want to delete this film?")){
      this.afs.collection('articles').doc(id).delete();
      this.toastr.success('Film was successfully deleted');
    }
  }
}
