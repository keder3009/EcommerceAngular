import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { UsuariosInterface } from "../models/usuario.Interface";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.usuarioNegociosCollection = afs.collection<UsuariosInterface>('usuarios');
    this.usuarios = this.usuarioNegociosCollection.valueChanges();
  }


  private usuarioNegociosCollection: AngularFirestoreCollection<UsuariosInterface>;
  private usuarios: Observable<UsuariosInterface[]>;
  private usuarioDoc: AngularFirestoreDocument<UsuariosInterface>;
  private usuario: Observable<UsuariosInterface>;
  public selectedUsuario: UsuariosInterface = {};

  // getUsuario(idUsuario: string) {
  //   this.usuarioDoc = this.afs.doc<UsuariosInterface>(`usuarios/${idUsuario}`);
  //   return this.usuario = this.usuarioDoc.snapshotChanges().pipe(map(
  //       actions => {
  //           if (actions.payload.exists === false) {
  //               return null;
  //           } else {
  //               const data = actions.payload.data() as UsuariosInterface;
  //               data.usuario_id = actions.payload.id;
  //               return data;
  //           }
  //       }
  //   ));

      //metodo para ingresar con un login
      loginEmail(email: string, password: string) {
        return new Promise((resolve, rejected) => {
            this.angularFireAuth.signInWithEmailAndPassword(email, password).then(user =>
                resolve(user),
                err => rejected(err));
        });
    }

        //metodo para cerrar seccion
        logoutUser() {
          return this.angularFireAuth.signOut();
      }
  

}