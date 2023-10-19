import { Component } from '@angular/core';

interface Type {
  name: string;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  types: Type[] = [
    {
      name: 'plante',
      color: 'green',
    },
    {
      name: 'feu',
      color: 'red',
    },
    {
      name: 'eau',
      color: 'blue',
    },
    {
      name: 'insecte',
      color: 'brown',
    }
  ];
}
