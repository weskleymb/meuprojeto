import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome = 'Weskley';

  adiciona() {
    const numero = Math.round(Math.random() * 100);
    this.nome = `Jose ${numero}`;
    console.log(`Adicionado ${this.nome}`);
  }

  alteraNome(evento) {
    this.nome = evento.target.value;
  }

  isDisabled(): boolean {
    return this.nome.length <= 2;
  }

}
