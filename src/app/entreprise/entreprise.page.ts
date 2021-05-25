import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.page.html',
  styleUrls: ['./entreprise.page.scss'],
})
export class EntreprisePage implements OnInit {

  entreprises = [];

  constructor(public afDB: AngularFireDatabase) { this.getEntreprise(); }

  ngOnInit() {
  }
  getEntreprise() {
    this.afDB.list('entreprise/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.entreprises = [];
      actions.forEach(action => {        
        this.entreprises.push({
          key: action.key,
          adresse: action.payload.exportVal().adresse,
          cp:  action.payload.exportVal().cp,
          nom:  action.payload.exportVal().nom,
          numero:  action.payload.exportVal().numero,
          ville:  action.payload.exportVal().ville,
        });
      });
    });
  }
}
