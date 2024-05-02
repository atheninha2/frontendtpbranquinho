import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../tarefa';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  emEdicao = false;
  @Input() tarefa: Tarefa = new Tarefa('', false);
  @Output () removerTarefa = new EventEmitter<Tarefa>(); //Evento para comunicar a remoção da tarefa
  @Output() modificaTarefa = new EventEmitter();
  
  //Função que remove a tarefa
  REMOVE_tarefa(tarefaAserRemovida: Tarefa){
    this.removerTarefa.emit(tarefaAserRemovida); //Emite o evento de remocao com a descricao
  }
}


