import { PokemonService } from 'src/app/services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {

  pokemon : any = '';
  pokemonType = [];
  pokemonImg = '';
  //pokemonChar = '';


  constructor(private PokemonService: PokemonService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params =>{
        this.getPokemon(params['id']);
      }
 
    );
   }
  getPokemon(id: any) {
    this.PokemonService.getPokemons(id).subscribe(
      res => {
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].typename;
        //this.pokemonChar = this.pokemon.characteristic;
      },
      err =>{
        console.log(err);
      } 
    );
  }

  ngOnInit(): void {
  }

 

}
