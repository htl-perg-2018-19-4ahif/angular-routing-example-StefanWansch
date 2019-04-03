import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


interface IPokemonList {

  results: IPokemon[];
}

interface IPokemon {
  name: string;
  url: string;
}

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})



export class PokeListComponent implements OnInit {
  public pokemonList: IPokemon[];
  public filterN="";
  public url='https://pokeapi.co/api/v2/pokemon?limit=964';

  constructor(private httpClient: HttpClient) { 
    
  }
  

  async ngOnInit() {
    this.pokemonList = (await this.httpClient.get<IPokemonList>(this.url).toPromise()).results;
  }
  
  

   
}
