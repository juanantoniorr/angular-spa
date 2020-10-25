import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';





 // Esta constante se pone en el import de app.modules
const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroes/heroe/:id', component: HeroeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'search/:name', component: BusquedaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);