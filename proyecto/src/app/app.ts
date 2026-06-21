import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cartcomponent } from "./cart/cart.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cartcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto');
}
