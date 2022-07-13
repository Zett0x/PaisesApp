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
  paisesSugeridos:Country[]=[];
  mostrarSugerencias:boolean=false;

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.termino=termino;
    this.hayError=false;
    this.paisService.buscarPais(this.termino).subscribe(resp=>{
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
    this.termino=termino;
    // this.mostrarSugerencias=true;
    if(termino)
    this.mostrarSugerencias=true;
    else this.mostrarSugerencias=false;
    //TODO CREAR SUGERENCIAS
    this.paisService.buscarPais(termino)
    .subscribe(paises=>this.paisesSugeridos=paises.splice(0,5),
    (err)=>this.paisesSugeridos=[]
      

    );

  }

  buscarSugerido(termino:string){
    this.buscar(termino);

  }


}
