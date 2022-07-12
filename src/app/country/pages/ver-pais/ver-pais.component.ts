import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  
  pais!:Country;

  constructor(private activedRoute:ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {

    

    this.activedRoute.params
    .pipe(
      switchMap(({id})=>this.paisService.getPaisPorAlpha(id)),
      tap(console.log)
    )
    .subscribe(pais=>{
      this.pais=pais;
    })
    // this.activedRoute.params.subscribe(({id})=>{
    //   console.log(id);
    //   this.paisService.getPaisPorAlpha(id)
    //   .subscribe(pais=>{
    //     console.log(pais);
    //   })
    // });

  }

}
