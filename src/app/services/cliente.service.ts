import { Injectable } from '@angular/core';
import{AngularFirestore} from '@angular/fire/compat/firestore';
import { Cliente } from '../models/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private firestore:AngularFirestore) { }

  getClientes(){
    return this.firestore.collection('clientes').snapshotChanges();
  }

  //método para insertar un documento en la colección
  insertarCliente(libro:Cliente){
    return this.firestore.collection('clientes').add(Object.assign({},libro));
  }

  //método para actualizar un doc existente
  updateCliente(libro:Cliente){
    return this.firestore.doc('clientes/'+libro.id).update(libro);
  }

  deleteCliente(id:string){
    return this.firestore.doc('clientes/'+id).delete();
  }
}
