import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { LayoutComponent } from './page/layout/layout.component';
import { ExtractComponent } from './page/extract/extract.component';

export const routes: Routes = [{
    path: '', component: LayoutComponent,
    children: [
        {path: '', component: HomeComponent},
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent},
        {path: 'extract', component: ExtractComponent},

    ]

}];
