import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { SeccionesInterface } from "../model/secciones.interface";


@Injectable({
  providedIn: 'root'
})
export class SeccionesService {

  constructor(private afs: AngularFirestore) {
    this.seccionesCollection = afs.collection<SeccionesInterface>('secciones');
    this.secciones = this.seccionesCollection.valueChanges();
  }

  private seccionesCollection: AngularFirestoreCollection<SeccionesInterface>;
  private secciones: Observable<SeccionesInterface[]>;
  private seccionesDoc: AngularFirestoreDocument<SeccionesInterface>;
  private seccion: Observable<SeccionesInterface>;

  getSeccion(idSeccion) {
    return this.secciones = this.afs.collection('secciones', ref => ref.where('seccion_id', '==', idSeccion)).snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as SeccionesInterface;
          data.seccion_id = a.payload.doc.id;
          return data;
        });
      }
    ));
  }

  getSecciones() {
    return this.secciones = this.seccionesCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as SeccionesInterface;
          data.seccion_id = a.payload.doc.id;
          return data;
        });
      }
    ));
  }

  addSeccion(seccion: SeccionesInterface): void {
    this.seccionesCollection.add(seccion);
  }


}
