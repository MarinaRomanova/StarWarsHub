import { Timestamp } from 'rxjs';
import { createLoweredSymbol } from '@angular/compiler';

export class Film {
    id:string;
    title:string;
    director:string;
    image:string;
    opening_crawl:string;
    release_date: Date;   

    constructor(title, director, image, opening_crawl, release_date) {
        this.title = title;
        this.director = director;
        this.image = image;
        this.opening_crawl = opening_crawl;
        this.release_date = release_date;
    }
}
