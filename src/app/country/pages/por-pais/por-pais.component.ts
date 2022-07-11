import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {

  termino:string='';
  hayError:boolean=false;
  paises:Country[]=[];

  constructor(private paisService:PaisService) { }

  buscar(){
    this.hayError=false;
    this.paisService.buscarPais(this.termino).subscribe(resp=>{
     this.paises=[...resp];
      console.log(this.paises);
    },(err)=>{
      this.hayError=true;
      this.paises=[];
    });
    console.log(this.termino);
  }


}
