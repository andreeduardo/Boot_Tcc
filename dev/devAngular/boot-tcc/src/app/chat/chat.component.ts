import { ChatService } from './../service/chat/chat.service';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent {
  
  constructor(private chat: ChatService) { 
  }
  
  MensagemPadrao= `Duca: Olá, eu sou o Duca! Sou um chatbot em desenvolvimento e até o momento posso lhe ajudar a como você visualiza suas notas ou seus boletos no portal do aluno. 
                  \nPara isso, me envie NOTAS ou BOLETOS e eu tentarei lhe ajudar :D.`;

  MensagemInicial = '';
  mensagem = "";

  enviarMensagem(value: string) {
    this.MensagemInicial = "";
    this.mensagem += `\nVocê: ${value}`;
    this.chat.enviarMensagem(value).subscribe(res => this.mensagem += `\nDuca: ` + res.resposta);
  }

  ngOnInit() {
  }

}
