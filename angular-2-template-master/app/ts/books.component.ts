import {Component} from 'angular2/core';
import {BookService} from './book.service';
import {Autori} from './autori.component';
import {DiventaGrande} from './auto-grow.directive';

@Component({

    selector: "books",
    template: `
        <input type="text" [value]="title" (input)="title = $event.target.value" autoGrow />
        <button 
            class="btn btn-primary" 
            [style.backgroundColor]="isActive ? 'red' : 'black'"
            (click) = "onClick($event)" 
            >
            Cerca
            </button>
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="#libro of libri">

                <img src="{{imageUrl}}" />
                {{ libro }}
            </li>
        </ul>

        <ul>
            <li *ngFor="#autore of autori">
                {{ autore }}
            </li>
        </ul>


    `,
    styles: ['li { color: blue; }'],
    providers: [BookService, Autori], 
    directives: [DiventaGrande]

})

export class BooksComponent {

    title = "La mia biblioteca";
    imageUrl = "http://lorempixel.com/100/100/";
    isActive = true;

    libri;
    autori;

    constructor(bookService: BookService, autoriService: Autori){

        this.libri = bookService.getBooks();
        this.autori = autoriService.getAutori();
    }

    onClick($event){
        console.log("cliccato: ", $event);
        this.isActive = !this.isActive;
    }
}