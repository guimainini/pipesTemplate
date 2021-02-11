import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
        :host ::ng-deep button {
            margin-right: .5em;
        }
    `]
})
export class AppComponent implements OnInit{

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }


  nombre: string ='guiLLermo maINini';
  valor : number = 1000;
  obj   = {
    nombre: 'El Pepe'
  };

  mostrarNombre() {
    console.log( this.nombre )
    console.log( this.valor )
    console.log( this.obj )
  }

  
}
