import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Role } from '../core/_models/user/Role';
import { AuthenticationService } from '../core/_services/authentication/authentication.service';
import { LocalVariable } from '../core/_services/local-storage/local-variables';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = this.authenticationService.getLocalVariable(LocalVariable.Token)
        const role: string = this.authenticationService.getLocalVariable(LocalVariable.Role)

        if (role && token) {
 
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(role) === -1) {

                // role not authorised so redirect to home page
                this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
                return false;
            }

            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}