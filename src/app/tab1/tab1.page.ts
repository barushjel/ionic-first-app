import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}
  
 ngOnInit (){
   let numero = 0;
   debugger

   numero = numero +2;
   numero = numero * 4;
  console.log('{Numero}:' + numero);
 }
}
