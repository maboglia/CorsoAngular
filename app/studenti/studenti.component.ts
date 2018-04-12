import { Component, OnInit } from '@angular/core';
import { Studente } from "./studente";
import { STUDENTI } from "./elenco_studenti";
@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit {
  
  studenti = STUDENTI;
  selectedStudente: Studente;
  mostraFoto = false;
  constructor() { }
  ngOnInit() { }

onSelect(studente: Studente): void {
  this.selectedStudente = studente;
}  

  mostraFaccia() {
    console.log('click', this.mostraFoto);
    this.mostraFoto = !this.mostraFoto;
  }

}
