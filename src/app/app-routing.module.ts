import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
    { path: '', component: PersonasComponent},
    { path: 'personas', component: PersonasComponent},
    { path: 'personas/agregar', component: FormularioComponent},
    { path: 'personas/:id', component: FormularioComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes
    )],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}
