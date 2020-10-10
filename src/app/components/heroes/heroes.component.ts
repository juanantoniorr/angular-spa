import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe [] = [];

  // tslint:disable-next-line: no-trailing-whitespace
  constructor(private heroesService: HeroesService) { 
    console.log('Constructor');

  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

}

