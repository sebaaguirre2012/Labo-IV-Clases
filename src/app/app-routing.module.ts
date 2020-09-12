import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { InputOutputComponent } from './pages/input-output/input-output.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'clase-1', component: BienvenidoComponent },
    { path: 'clase-2', component: LoginComponent },
    { path: 'clase-3', component: InputOutputComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }