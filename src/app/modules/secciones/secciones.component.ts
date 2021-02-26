import { Component, OnInit } from '@angular/core';
import { SeccionesService } from "./services/secciones.service";
import { ProductosService } from "../productos/services/productos.service";

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {


  // de esta seccion
  public Secciones = [];
  public Productos = [];
  public id = 1;

  constructor(private seccionesService: SeccionesService, private productosService: ProductosService) { }

  ngOnInit() {
    this.getSecciones();
    this.filtrarProductosSeccion(this.id);
  }

  // funcion para traer todas las secciones
  getSecciones() {
    this.seccionesService.getSecciones().subscribe(section => {
      this.Secciones = section;
      console.log(this.Secciones)
    })
  }


  filtrarProductosSeccion(id) {
    this.id = id;
    if (this.id == 1) {
      this.productosService.getProductos().subscribe(product => {
        this.Productos = product;
        console.log(this.Productos)
      })
    } else {
      this.productosService.getProductosSeccion(id).subscribe(product => {
        this.Productos = product;
        console.log(this.Productos)
      })
    }
  }

}
