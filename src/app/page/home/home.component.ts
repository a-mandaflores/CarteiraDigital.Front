import { Component, viewChild } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  openModal: boolean = false

  openClose(){
    this.openModal = !this.openModal
    console.log(this.openModal)
  }
}
