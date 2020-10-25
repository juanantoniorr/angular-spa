import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroe: Heroe;
  heroes: Heroe [] = [];


  // tslint:disable-next-line: no-trailing-whitespace
  constructor(private heroesService: HeroesService, private router:Router) { 
    console.log('Constructor');

  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }
  verHeroe(id: number){
    this.router.navigate(['heroes', 'heroe', id]); //significa heroes/heroe/id en la url, se puede simplificar con un routerLink
    this.heroe = this.heroes[id];
    console.log(this.heroe);
  }

}

