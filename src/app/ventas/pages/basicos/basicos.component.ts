import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower    : string = 'guillermo';
  nombreUpper    : string = 'GUILLERMO';
  nombreCompletp : string = 'gUiLlErMo mAiNiNi';

  fecha: Date = new Date(); // el dia de hoy


  

}
