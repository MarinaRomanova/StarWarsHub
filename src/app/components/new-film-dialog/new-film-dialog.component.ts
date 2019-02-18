import { Component, OnInit, Inject } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Film } from 'src/app/classes/film';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/Operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-new-film-dialog',
  templateUrl: './new-film-dialog.component.html',
  styleUrls: ['./new-film-dialog.component.css']
})
export class NewFilmDialogComponent implements OnInit {
  form: FormGroup;
  film:Film;
  //images: string[] = ["assets\1.jpeg", "assets\2.jpeg", "assets\3.jpeg", "assets\4.jpeg", "assets\5.jpeg", "assets\6.jpeg", "assets\7.jpeg"]

  constructor(public dialogRef: MatDialogRef<NewFilmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Film, 
    private formbuilder: FormBuilder, private toastr:ToastrService, 
    private firebase:FirebaseService,) { }

  ngOnInit() {
    this.form = this.formbuilder.group({
      title : ['', Validators.required],
      director : ['', Validators.required],
      image : ['', Validators.required],
      release_date : ['', Validators.required],
      opening_crawl : ['', Validators.required]
    });
  }

}
