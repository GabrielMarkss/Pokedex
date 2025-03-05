import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex } from '../../Pokedex';

@Component({
  selector: 'app-pokedex-list',
  imports: [ CommonModule],
  templateUrl: './ability-list.component.html',
  styleUrl: './ability-list.component.css'
})
export class AbilityListComponent {

    private apiUrl = 'https://pokeapi.co/api/v2/pokedex/1/';
  
    title = 'Pokedex';
    pokedex!: Pokedex;
  
    constructor(private http: HttpClient){
      this.getPokedex().subscribe(dados => {
        this.pokedex = dados;
        console.log(dados);
      });
    }    
  
    getPokedex(): Observable<Pokedex> {
      return this.http.get<Pokedex>(this.apiUrl);
    }
    
  }