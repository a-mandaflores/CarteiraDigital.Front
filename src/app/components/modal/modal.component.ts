import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isModalVisible!: boolean
  @Output() modalClose: EventEmitter<boolean> = new EventEmitter<boolean>(); 

  constructor(
		config: NgbModalConfig,
	) {
		config.backdrop = 'static';
		config.keyboard = false;
	}


  selectedButton: string = 'casa'
  saveElements: {} = {}

  cadastrar = new FormGroup({
    describe: new FormControl(''),
    money: new FormControl(0, [Validators.min(1), Validators.required]),
    type: new FormControl(this.selectedButton)
  })


  select(button: string){
    this.selectedButton = button
  }

  close(){
    this.modalClose.emit(false);
  }

  save(){
    this.saveElements = {
      describe: this.cadastrar.value.describe,
      money: this.cadastrar.value.money,
      type: this.cadastrar.value.type
    }
    this.modalClose.emit(false);
  }

}
