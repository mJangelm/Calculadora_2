import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  valor1= 0;
  valor2= 0;
  resultado= 0;

Resultado() {
  return this.valor1 + this.valor2;
}
Calcular() {
  this.resultado= this.valor1 + this.valor2;
}
}
