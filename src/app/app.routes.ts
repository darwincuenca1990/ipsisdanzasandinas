import { Routes } from '@angular/router';
import { ElencoinfantilComponent } from './components/elencoinfantil/elencoinfantil.component';
import { ElencoprincipalComponent } from './components/elencoprincipal/elencoprincipal.component';
import { ElencomasterComponent } from './components/elencomaster/elencomaster.component';
import { InstitucionalComponent } from './components/institucional/institucional.component';
import { NuestrasPresentaciones } from './components/nuestras-presentaciones/nuestras-presentaciones';
import { ProximosEventos } from './components/proximos-eventos/proximos-eventos';
import { CatalogPreviewComponent } from './components/catalog-preview/catalog-preview.component';
import { EstructuraOrganizacional } from './components/estructura-organizacional/estructura-organizacional';

export const routes: Routes = [
    { path: '', component: InstitucionalComponent },
    { path: 'elencoinfantil', component: ElencoinfantilComponent },
    { path: 'elencoprincipal', component: ElencoprincipalComponent },
    { path: 'elencomaster', component: ElencomasterComponent },
    { path: 'nuestras-presentaciones', component: NuestrasPresentaciones },
    { path: 'proximos-eventos', component: ProximosEventos },
    { path: 'estructura-organizacional', component: EstructuraOrganizacional },
    { path: 'catalog-preview', component: CatalogPreviewComponent },
];
