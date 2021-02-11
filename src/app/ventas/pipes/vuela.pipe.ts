import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform{
    
    transform( booleanVuela: boolean ) : string{
        // if( enMayusculas ){
        //     return valor.toUpperCase();
        // }else{
        //     return valor.toLocaleLowerCase();

        // }
        return ( booleanVuela )? 'vuela' : 'no vuela';
    }


    
}