import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    public authService: AuthService,
     public router: Router) { }


  canActivate(): boolean {
    // if (!this.authService.isAuthenticated()) {
    //   this.router.navigate(['']);
    //   return false;
    // }
    return true;
  }
}
