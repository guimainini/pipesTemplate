import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/ventas.interface';

@Pipe({
  name: 'ordernar'
})
export class OrdernarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderPor:string = 'sin valor'): Heroe[] {
    
    switch( orderPor ){
      case 'nombre':
        return heroes.sort((a,b) => ( a.nombre > b.nombre ) ? 1 : -1);
        break;
      case 'vuela':
        return heroes.sort((a,b) => ( a.vuela > b.vuela ) ? -1 : 1);
        break;
      case 'color':
      return heroes.sort((a,b) => ( a.vuela > b.vuela ) ? 1 : -1);
      break;  
      default:
        return heroes;
    }
    





    // if( orderPor === 'sin valor'){

    //   return heroes;
    // }else{
    //   heroes = heroes.sort((a,b) => ( a.nombre > b.nombre ) ? 1 : -1)
    // }
    // return heroes;

  }


  

    

}
