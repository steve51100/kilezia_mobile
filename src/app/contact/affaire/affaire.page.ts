import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.page.html',
  styleUrls: ['./affaire.page.scss'],
})
export class AffairePage implements OnInit {

  affaires = [];

  constructor(public afDB: AngularFireDatabase) { this.getAffaires(); }

  ngOnInit() {
  }
  getAffaires() {
    this.afDB.list('charger_affaires/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.affaires = [];
      actions.forEach(action => {
        console.log('info:' + action.payload.exportVal().prenom);
        
        this.affaires.push({
          key: action.key,
          prenom: action.payload.exportVal().prenom,
          nom:  action.payload.exportVal().nom,
          fonction:  action.payload.exportVal().fonction,
          telephone:  action.payload.exportVal().telephone,
          mail:  action.payload.exportVal().mail,
        });
      });
    });
  }
}
