import { RenderMode, ServerRoute } from '@angular/ssr';
import { CATALOGO } from './data/catalogo.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'productos/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return CATALOGO.map(c => ({ slug: c.link }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];