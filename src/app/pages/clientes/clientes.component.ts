import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  //PROPIEDADES
  clientes:Cliente[] = [];
  cliente = new Cliente();


  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data.map(doc => {
        return{
          ...doc.payload.doc.data() as Cliente,
          id:doc.payload.doc.id
        };
      })
    });
  }

   //MÉTODO PARA INSERTAR UN NUEVO LIBRO
   insertarCliente(){
    this.clienteService.insertarCliente(this.cliente);
    this.cliente = new Cliente();
  }

  //MÉTODO PARA SELECIONAR UN cliente Y QUE SE ASIGNE A LA PROP cliente
  selectCliente(clienteSeleccionado:Cliente){
    this.cliente = clienteSeleccionado;
  }

  //MÉTODO PARA ACTUALIZAR UN cliente
  updateCliente(){
    this.clienteService.updateCliente(this.cliente);
    this.cliente = new Cliente();
  }

  //MÉTODO PARA ELIMINAR UN LIRBO
  deleteCliente(id:string){
    this.clienteService.deleteCliente(id);
    this.cliente = new Cliente();
  }




}
