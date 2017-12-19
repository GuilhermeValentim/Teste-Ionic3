import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Usuario } from '../../model/usuario/usuario.model';
import { SettingsPage } from '../settings/settings';
import { IntroPage } from '../intro/intro';
import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario: Usuario = {
    usuario_nome: "Guilherme :D",
    usuario_senha: "",
    nomes: ["João", "Maria", "Ana"],
    ver: true,
    nome_botao: "Desaparecer Lista",
    texto_usuario: "",
  }
  
  img: string = "assets/imgs/Suprema2.jpg";


  constructor(public navCtrl: NavController) { }


  public changePhoto() {
    if (this.img == "assets/imgs/Suprema2.jpg") {
      this.img = "assets/imgs/slide1.png";
    } else if (this.img == "assets/imgs/slide1.png"){
      this.img = "assets/imgs/Suprema2.jpg"
    }
  }
  public openPerfil(){
    this.navCtrl.push(PerfilPage);
  }

  public openSettings() {
    this.navCtrl.push(SettingsPage);
  }
  public openIntroPage(){
    this.navCtrl.push(IntroPage);
  }

}
