import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../model/usuario/usuario.model';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Injectable()
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  usuario: Usuario = {
    nomes: ["João", "Maria", "Ana"],
    ver: true,
    nome_botao: "Desaparecer Lista",
    texto_usuario: ""
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    console.log(this.usuario.nomes);
  }

  public changeTextButton() {
    if (this.usuario.ver == true) {
      this.usuario.nome_botao = "Desaparecer Lista";
    } else {
      this.usuario.nome_botao = "Aparecer Lista";
    }
  }

  public addNome(texto_usuario) {
    if (this.usuario.texto_usuario == "") { }
    else {
      this.usuario.nomes.push(this.usuario.texto_usuario);
      this.usuario.texto_usuario = "";
      console.log(this.usuario.nomes);
    }
  }
  public deleteAllList() {
    while (this.usuario.nomes.length > 0) {
      this.usuario.nomes.pop();
      console.log(this.usuario.nomes);
    }
  }
  public deleteOneByOne() {
    this.usuario.nomes.pop();
    console.log(this.usuario.nomes);
  }
}