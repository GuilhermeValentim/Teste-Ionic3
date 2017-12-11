import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Usuario } from '../../model/usuario/usuario.model';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  img: string = "assets/imgs/Suprema2.jpg";


  constructor(public navCtrl: NavController) { }

  public changePhoto() {
    if (this.img == "assets/imgs/Suprema2.jpg") {
      this.img = "assets/imgs/slide1.png";
    } else if (this.img == "assets/imgs/slide1.png"){
      this.img = "assets/imgs/Suprema2.jpg"
    }
  }



  public openSettings() {
    this.navCtrl.push(SettingsPage);
  }

}
