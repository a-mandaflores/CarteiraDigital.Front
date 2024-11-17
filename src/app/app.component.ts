import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CarteiraDigital';
}
