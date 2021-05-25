import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  dataUser = {
    email:"",
    password:""
  };
  connected: boolean;

  userId='';
  method='';
  email='';

  constructor(public toastController: ToastController,
    public afDB: AngularFireDatabase,
    private router: Router,
    public afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe(auth => {
        if (!auth) {
          this.connected = false;
        } else {
          this.connected = true;
          this.userId = auth.uid;
        }
      });
    }
    logout() {
      this.afAuth.signOut();
      this.router.navigateByUrl('/accueil');

    }
}
