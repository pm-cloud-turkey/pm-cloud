import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const AccountRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
    imports: [RouterModule.forChild(AccountRoutes)],
    exports: [RouterModule],
    providers: []
})
export class AccountRoutingModule { }
