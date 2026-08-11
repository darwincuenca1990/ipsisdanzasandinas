import { Routes } from '@angular/router';
import { ElencoinfantilComponent } from './components/elencoinfantil/elencoinfantil.component';
import { InstitucionalComponent } from './components/institucional/institucional.component';

export const routes: Routes = [
    { path: '', component: InstitucionalComponent },
    { path: 'elencoinfantil', component: ElencoinfantilComponent },
];
