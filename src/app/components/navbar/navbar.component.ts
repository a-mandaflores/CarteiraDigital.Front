import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  login: boolean = true

  actualRoutes: string = 'login'

  buttonClasses = {
    login: 'btn btn-primary',
    register: 'btn btn-outline-primary',
  };

  
  clickButtonLoginRegister(){

    
    const currentRoute  = this.route.snapshot.children[0].routeConfig?.path;

    this.buttonClasses.login = currentRoute === 'login' ? 'btn btn-primary' : 'btn btn-outline-primary';
    this.buttonClasses.register = currentRoute === 'register' ? 'btn btn-primary' : 'btn btn-outline-primary';

    this.login = currentRoute === 'login' || currentRoute == 'register' ? true : false
    
  }

  ngOnInit() {
    this.clickButtonLoginRegister()    
    console.log()
  }


    
  getOut(){
    this.login = !this.login
  }

}
