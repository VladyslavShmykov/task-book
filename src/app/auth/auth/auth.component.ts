import {Component} from '@angular/core';
import {AuthService} from "../../../shared/services/auth/auth.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {of, switchMap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  constructor(private authService: AuthService, private router: Router) {
    this.authService.authState().pipe(
      takeUntilDestroyed(),
      switchMap(user => {
        if (!user.getIsAuthorized()) {
          this.authService.signInWithGoogle().then();
          return of(null);
        }
        return of(user);
      })).subscribe(res => {
      if (res) {
        this.router.navigate(['main']).then()
      }
    })
  }
}
