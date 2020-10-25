import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router, public heroesService: HeroesService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  buscarHeroe(nombre: string){
    this.router.navigate(['/search', nombre]);
    let heroe: Heroe[] = this.heroesService.getHeroeByName(nombre);
    
    

  }

}
