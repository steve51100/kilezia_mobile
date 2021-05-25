import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-techs',
  templateUrl: './techs.page.html',
  styleUrls: ['./techs.page.scss'],
})
export class TechsPage implements OnInit {

  techs = [];

  constructor(public afDB: AngularFireDatabase) { this.getTechs(); }

  ngOnInit() {
  }
  getTechs() {
    this.afDB.list('techniciens/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.techs = [];
      actions.forEach(action => {
        console.log('info:' + action.payload.exportVal().prenom);
        
        this.techs.push({
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
