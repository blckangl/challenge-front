import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserLogin} from "../../interfaces";
import {Router} from "@angular/router";
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userForm: FormGroup;
  showError: boolean=false;

  constructor(private fb: FormBuilder,
              private authService: AuthServiceService,
              private router: Router) {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['']);
    }
    this.userForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.showError=false;
    const userLogin: UserLogin = this.userForm.value;


     this.authService.login(userLogin.email, userLogin.password).subscribe((res) => {
       this.router.navigate(['']);
     },error => {
       this.showError=true;
     })

  }
}
