import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public enviarMensagem(usuario: string, senha: string): Observable<any> {
		try {
			let user = {
				usuario: usuario,
				senha: senha
			};
			let url: string = `http://localhost:3000/chat`;
			return this.httpClient.post(url, user);
		}
		catch (e) {
			return Observable.throw(e);
		}
	}
}

