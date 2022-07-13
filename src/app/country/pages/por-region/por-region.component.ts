import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones:string[]=['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva:string='';
  paises:Country[]=[];


  constructor(private paisService:PaisService) { };

  activarRegion(region:string){
    if(this.regionActiva===region)return;
    this.regionActiva=region;

    //TODO HACER EL LLAMADO AL SERVICIO
    this.paisService.getCountryByRegion(this.regionActiva)
    .subscribe(paises=>{
      this.paises=paises;
    })

  }

  getClaseCSS(region:string):string{
    return (region===this.regionActiva)
    ? 'btn btn-primary'
    :'btn btn-outline-primary';
  }

}
