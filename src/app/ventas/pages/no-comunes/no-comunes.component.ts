import { Component } from '@angular/core';

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

}
