import { Observable } from "rxjs";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { ProductosInterface } from "../models/productos.interface";


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private afs: AngularFirestore) {
    this.productosCollection = afs.collection<ProductosInterface>('productos');
    this.productos = this.productosCollection.valueChanges();
  }

  private productosCollection: AngularFirestoreCollection<ProductosInterface>;
  private productos: Observable<ProductosInterface[]>;
  private productosDoc: AngularFirestoreDocument<ProductosInterface>;
  private producto: Observable<ProductosInterface>;

  getProductos() {
    return this.productos = this.productosCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as ProductosInterface;
          data.producto_id = a.payload.doc.id;
          return data;
        });
      }
    ));
  }


  getProductosSeccion(idSeccion) {
    return this.productos = this.afs.collection('productos', ref => ref.where('seccion_id', '==', idSeccion)).snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as ProductosInterface;
          data.producto_id = a.payload.doc.id;
          return data;
        });
      }
    ));
  }

  getProducto(idProducto: string) {
    this.productosDoc = this.afs.doc<ProductosInterface>(`productos/${idProducto}`);
    return this.producto = this.productosDoc.snapshotChanges().pipe(map(
      actions => {
        if (actions.payload.exists === false) {
          return null;
        } else {
          const data = actions.payload.data() as ProductosInterface;
          data.producto_id = actions.payload.id;
          return data;
        }
      }
    ));
  }

  addProducto(producto: ProductosInterface,): void {
    this.productosCollection.add(producto);
  }


}
