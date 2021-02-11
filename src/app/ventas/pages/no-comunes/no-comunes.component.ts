import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent   {
  //i18nSelect
  nombre: string = 'Guille';
  genero: string = 'masculino';
  pepa  : string = '';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  cliente: string[] = ['Maria', 'Pedro', 'Juan', 'El pepe','Ren'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',

  }

  cambiarCliente (){
    this.nombre = 'Nati';
    this.genero = 'femenino'
  }


  borrarCliente (){
    let pepa = this.cliente.pop();  
    console.log(this.cliente)
  }

  // KeyValue Pipe

  persona = {
    nombre    : 'Guillermo',
    edad      : 40,
    direccion : 'Mar del plata, Buenos Aires'
  }
  
  // JsonPepi
  heroes = [
    {
      nombre: 'Superman',
    vuela: true
    },
    {
      nombre: 'Robin',
    vuela: false
    },
    {
      nombre: 'Aquaman',
    vuela: false
    }
  ]

  
  //Async Pipe

  miObservable = interval(1000); 

  valorPromesa = new Promise ( (resolve) => {
    setTimeout(() =>{
      resolve ( 'Tenemos data de promesa' )
    }, 3500);
  }); 

}
