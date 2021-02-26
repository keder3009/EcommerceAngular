import { Component, OnInit } from '@angular/core';
import { SeccionesService } from "../secciones/services/secciones.service";
import { ProductosService } from "../productos/services/productos.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public nombreSeccion;
  public idSeccion;
  public nombreProducto;
  public publicado = false;
  public destacado = false;
  public descripcion;
  public precio;
  public imagen1;

  public Secciones = [];

  public addS = {};
  public addP = {};

  constructor(private seccionesService: SeccionesService, private productosService: ProductosService) { }

  ngOnInit(): void {
    this.getSecciones();
  }

  // funcion para traer todas las secciones
  getSecciones() {
    this.seccionesService.getSecciones().subscribe(section => {
      this.Secciones = section;
      console.log(this.Secciones)
    })
  }

  // funcion para guardar una seccion
  onSaveSeccion() {
    this.addS = {
      name: this.nombreSeccion,
    }

    this.seccionesService.addSeccion(this.addS);
  }

  onSaveProducto() {
    this.addP = {
      seccion_id: this.idSeccion,
      nombre: this.nombreProducto,
      publicado: this.publicado,
      destacado: this.destacado,
      descripcion: this.descripcion,
      precio: this.precio,
      imagen1: this.imagen1,
    }

    this.productosService.addProducto(this.addP);
  }

}
