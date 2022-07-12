import { Component, EventEmitter, Output,OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit  {

  @Output() onEnter:EventEmitter<string>= new EventEmitter();
  termino:string='';

  @Input() placeholder:string='';

  @Output() onDebounce:EventEmitter<string>=new EventEmitter();

  debouncer:Subject<string>=new Subject();


  constructor() {};

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300))
    .subscribe(valor=>{
      this.onDebounce.emit(valor);
    });
  }


  buscar(){
   this.onEnter.emit(this.termino);

  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
    
  }





}
