import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable() 

export class PersonasService{
    personas: Persona[] = [
        new Persona('Juan', 'Perez'), 
        new Persona('Laura', 'Juarez'), 
        new Persona('Karla', 'Lara')    
    ];

    saludar = new EventEmitter<number>();

    constructor(private loggingService:LoggingService){

    }

    agregarPersona(persona: Persona){
        this.loggingService.enviarMensajeAConsola("Agregamos persona: "+ persona.nombre)
        this.personas.push(persona);
    }
}