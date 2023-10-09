import { Component, ElementRef, EventEmitter, Output, ViewChild, OnInit } from '@angular/core';
import { Persona} from '../../persona.model'
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit{

    @Output() personaCreada = new EventEmitter<Persona>();

    nombreInput: string = '';
    apellidoInput: string = '';

    // @ViewChild('nombreInput') nombreInput: ElementRef;
    // @ViewChild('apellidoInput') apellidoInput: ElementRef;

    constructor(private logginService:LoggingService,
                private personasService:PersonasService){
        this.personasService.saludar.subscribe(
            (indice:number) => alert("El titulo es: " + indice)
        );
    }

    ngOnInit(){

    }


    onAgregarPersona() {
        // let persona1 = new Persona(
        //     this.nombreInput.nativeElement.value, 
        //     this.apellidoInput.nativeElement.value
        // );

        let persona1 = new Persona(this.nombreInput, this.apellidoInput)
        

        // Service
        //this.logginService.enviarMensajeAConsola("Enviamos persona: " + persona1.nombre + " apellido: " + persona1.apellido)        
        //this.personaCreada.emit(persona1);

        this.personasService.agregarPersona(persona1);
        this.nombreInput = '';
        this.apellidoInput = '';
    }
}
