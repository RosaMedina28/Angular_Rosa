import { Component, OnInit } from '@angular/core';
import { Personaa } from '..//personaa';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
  

})
export class PersonasComponent   {

 Newperson = new Personaa('Rosa','Medina Rodríguez', 'Femenino', 18);


  title = 'Angular_Tarea'

}
