import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-popup-distribuidores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-distribuidores.component.html',
  styleUrl: './popup-distribuidores.component.css'
})
export class PopupDistribuidoresComponent implements OnInit, OnDestroy {
  isVisible = true;
  private hasBeenClosedInThisPageLoad = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Solo ejecutar en el navegador
    if (this.isBrowser) {
      this.checkPopupVisibility();
      this.setupVisibilityChangeListener();
    }
  }

  ngOnDestroy() {
    // Solo limpiar en el navegador
    if (this.isBrowser) {
      this.removeVisibilityChangeListener();
    }
  }

  private setupVisibilityChangeListener() {
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }
  }

  private removeVisibilityChangeListener() {
    if (typeof document !== 'undefined') {
      document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    }
  }

  private handleVisibilityChange = () => {
    // Verificar si document existe
    if (typeof document !== 'undefined' && !document.hidden) {
      this.checkPopupVisibility();
    }
  }

  private checkPopupVisibility() {
    // Verificar que estamos en el navegador y que sessionStorage existe
    if (!this.isBrowser || typeof sessionStorage === 'undefined' || typeof window === 'undefined') {
      this.isVisible = true;
      return;
    }

    const estadoGuardado = sessionStorage.getItem('popupDistribuidoresCerrado');
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      this.isVisible = false;
      return;
    }

    if (estadoGuardado === 'true' && this.hasBeenClosedInThisPageLoad) {
      // Fue cerrado en ESTA carga de página - no mostrar
      this.isVisible = false;
    } else if (estadoGuardado === 'true' && !this.hasBeenClosedInThisPageLoad) {
      // Fue cerrado en una sesión anterior pero no en esta carga - mostrar
      this.isVisible = true;
      // Resetear el sessionStorage para que solo dure hasta recargar
      sessionStorage.removeItem('popupDistribuidoresCerrado');
    } else {
      // Nunca ha sido cerrado - mostrar
      this.isVisible = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    // Verificar que estamos en el navegador
    if (!this.isBrowser || typeof window === 'undefined') {
      return;
    }
    
    const width = (event.target as Window).innerWidth;
    if (width <= 768) {
      this.isVisible = false;
    } else {
      this.checkPopupVisibility();
    }
  }

  cerrarPopup() {
    // Verificar que estamos en el navegador y que sessionStorage existe
    if (!this.isBrowser || typeof sessionStorage === 'undefined') {
      this.isVisible = false;
      return;
    }
    
    this.isVisible = false;
    this.hasBeenClosedInThisPageLoad = true;
    sessionStorage.setItem('popupDistribuidoresCerrado', 'true');
  }
}