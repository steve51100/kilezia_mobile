import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController, Platform } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-outillages',
  templateUrl: './outillages.page.html',
  styleUrls: ['./outillages.page.scss'],
})
export class OutillagesPage implements OnInit {

  connected = false;
  userId: any;

  entreprises = [];
  materiels = [];
  destinataires = [];
  descriptions = '';

  Destinataire = "";
  Mails = "";
  Entreprises = "";
  Materiels = "";
  Descriptions = '';

  constructor(private modalController: ModalController,
    public afAuth: AngularFireAuth,
    public afDB: AngularFireDatabase,
    public emailComposer: EmailComposer)
     {this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecter');

      } else {
        //console.log('Utilisateur connecté:' + auth.uid);
        this.connected = true;
        this.userId = auth.uid;
      }

    });
    this.getAffaires();
    this.getEntreprises();
    this.send();
  }

  ngOnInit() {
  }
  send() {
      let email = {
        to: this.Mails,
        cc: [],
        bcc: [],
        attachment: [],
        subject: "Demande" + " " + this.Materiels + " " + "pour le chantier de" + " " + this.Entreprises,
        body: this.Descriptions,
        isHtml: false,
        app: "gmail"
      }
      this.emailComposer.open(email);
  }

  //on recupere les info select option
  getAffaires() {
    this.afDB.list('charger_affaires/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.destinataires = [];
      actions.forEach(action => {
        console.log('info:' + action.payload.exportVal().prenom);
        this.destinataires.push({
          key: action.key,
          prenom: action.payload.exportVal().prenom,
          nom: action.payload.exportVal().nom,
          mail: action.payload.exportVal().mail,
        });
      });
    });
  }
  getEntreprises() {
    this.afDB.list('entreprise/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.entreprises = [];
      actions.forEach(action => {
        this.entreprises.push({
          key: action.key,
          nom: action.payload.exportVal().nom,
        });
      });
    });
  }

}
