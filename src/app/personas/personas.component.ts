import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
    personas: Persona[] = [];

    constructor(private logginService: LoggingService,
        private personaService: PersonasService
    ) {}

    ngOnInit(): void {
        this.personas = this.personaService.personas;
    }

    // personaAgregada(persona: Persona){
    //     //this.personas.push(persona);
    //     this.personaService.agregarPersona(persona);

    // }
}
