import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {
  heroes: Heroe [];

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      //console.log(params['name']); //asi le puse en el archivo de rutas
      this.heroes = this.heroesService.getHeroeByName(params['name']);
      console.log(this.heroes);

    })
  }

}
