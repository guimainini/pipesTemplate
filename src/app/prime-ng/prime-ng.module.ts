import { NgModule } from '@angular/core';

// PrimeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';





// PrimeNG animacion
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,


    
    BrowserAnimationsModule,
    BrowserModule
  ]
})
export class PrimeNgModule { }
