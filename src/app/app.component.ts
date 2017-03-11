import { Component } from '@angular/core';

export class Entry {
  name: string;
  weight: number;
  value: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  entries: Entry[] = [
     { name: 'thing1', weight: 25, value: 80 },
     { name: 'thing2', weight: 75, value: 95 }
  ]

  addRow(): void {
    this.entries.push({
      name: '',
      weight: 0,
      value: 0
    });
  }

  removeRow(index: number): void {
    this.entries.splice(index, 1);
  }

  getTotalWeight(): number {
    return this.entries.reduce((prev, next) => {
      return prev + Number(next.weight);
    }, 0);
  }

  computeAverage(): number {
    return this.entries.reduce((prev, next) => {
      return prev + ((Number(next.weight) / 100) * Number(next.value));
    }, 0)
  }
}
