import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient: HttpClient) { }

  public enviarMensagem(pPergunta: string): any {
		try {
			let json = {
				pergunta: pPergunta
			};
			let url: string = `http://localhost:3000/chat`;
			return this.httpClient.post(url, json);
		}
		catch (e) {
      return e.getMessage();	
    }
	}
}
