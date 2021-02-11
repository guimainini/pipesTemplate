import { Component } from '@angular/core';
import { Color, Heroe } from '../../interface/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  
  enMayusculas: boolean = true;
  
  hereos: Heroe[] = [
    {
      nombre: 'Superman',
      vuela : true,
      color : Color.azul
    },
    {
      nombre: 'Batman',
      vuela : false,
      color : Color.negro
    },
    {
      nombre: 'Robin',
      vuela : false,
      color : Color.rojo
    },
    {
      nombre: 'Daredevil',
      vuela : false,
      color : Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela : true,
      color : Color.verde
    }
  ]

  cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }


  ordenarPor: string = '';

  cambiarOrden ( valor: string ) {
    this.ordenarPor = valor;
    console.log(valor);
  }

}
