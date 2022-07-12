import { Component} from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent  {

  termino:string='';
  hayError:boolean=false;
  paises:Country[]=[];

  constructor(private paisService:PaisService) {}

  buscar(termino:string){
    this.termino=termino;
    this.hayError=false;
    this.paisService.buscarCapital(this.termino).subscribe(resp=>{
     this.paises=[...resp];
      //console.log(this.paises);
    },(err)=>{
      this.hayError=true;
      this.paises=[];
    });

   
    // console.log(this.termino);
  }
  sugerencias(termino:string){
    this.hayError=false;
    //TODO CREAR SUGERENCIAS

  }
 

}
