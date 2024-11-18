import { Routes } from '@angular/router';
import { ProductosComponent } from './paginas/productos/productos.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { CompraComponent } from './paginas/compra/compra.component';

export const routes: Routes = [
    { path: 'productos',component: ProductosComponent},
    { path: 'mi-contacto',component:ContactoComponent},
    { path: 'compra',component:CompraComponent}

];
    