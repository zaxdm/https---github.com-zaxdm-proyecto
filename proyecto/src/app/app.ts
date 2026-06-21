import { Component, HostListener, signal } from '@angular/core';
import { FooterComponent } from "./components/Reutilizables/footer/footer.component";
import { PopupDistribuidoresComponent } from "./components/Reutilizables/popup-distribuidores/popup-distribuidores.component";
import { BotonSubirComponent } from "./components/Reutilizables/boton-subir/boton-subir.component";
import { NavbarComponent } from './components/Reutilizables/navbar/navbar.component';
import { HeaderComponent } from './components/Reutilizables/header/header.component';
import { RouterOutlet } from '@angular/router';
import { CarritoComponent } from "./components/Reutilizables/carrito/carrito.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, FooterComponent, PopupDistribuidoresComponent, BotonSubirComponent, CarritoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto');
isNavbarFixed = false; // 🔹 controlará si el navbar se fija o no

  // Detecta el scroll de la página
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    // 🔹 Si scrolleamos más de 100px (ajusta si tu header es más alto)
    this.isNavbarFixed = scrollY > 100;
  }
}
