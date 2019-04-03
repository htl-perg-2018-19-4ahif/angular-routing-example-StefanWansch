import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Identifiers } from '@angular/compiler';

interface IDetails{
  name: string;
  abilities:IAbilities[];
}
interface IAbilities{
  name:string;
}


@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {
  public idP:number; 
  public details:IDetails={name:"",abilities:[]};
  public url="https://pokeapi.co/api/v2/pokemon/"
  constructor(private httpClient:HttpClient,private acRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.acRoute.paramMap.subscribe((params: ParamMap) => {
      this.idP = parseInt(params.get('id'));
    });
    this.details = (await this.httpClient.get<IDetails>(this.url+this.idP).toPromise());

  }

}
