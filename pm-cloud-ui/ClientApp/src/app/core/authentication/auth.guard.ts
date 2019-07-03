import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {AuthService} from './auth.service';
import {from, Observable} from 'rxjs';
import {map} from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log("Authenticated:" + this.authService.isAuthenticated());

        return from(this.authService.manager.getUser()).pipe(map(user => {
            if (user != null && !user.expired) {
                return true;
            } else {
                this.router.navigate(['/login'], {queryParams: {redirect: state.url}, replaceUrl: true});
                return false;
            }
        }));


    }


}
