import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, heroeService: HeroesService) {

    activatedRoute.params.subscribe(params => { //Con esto agarramos los parametros en la url
      console.log(params['id']); //Si solo dejamos el params me da la llave y el valor
      this.heroe = heroeService.getHeroe(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
