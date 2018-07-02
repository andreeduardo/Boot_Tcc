import { LoginService } from './../service/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router,
              private loginService: LoginService) {
  }

  public username : string = "";
  public password : string = "";
  public exceptionMessage: string;
  
  getUsuario(){
    return this.username;
  }

 public login() {  
		 	this.loginService.authenticate(this.username, this.password).subscribe(response => {
		 		if (response.success) {
          this.router.navigate(["chat"]);
		 		} else {
		 			this.exceptionMessage = 'Usuário ou senha incorretos';
		 		}
		 	}, () => {
		 		this.exceptionMessage = 'Não foi possível realizar o login';
		 	});
  }

  ngOnInit() {
  }
}