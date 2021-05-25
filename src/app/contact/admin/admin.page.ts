import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  administrations = [];

  constructor(public afDB: AngularFireDatabase) {this.getAdmin(); }

  ngOnInit() {
  }
  getAdmin() {
    this.afDB.list('administrations/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.administrations = [];
      actions.forEach(action => {
        console.log('info:' + action.payload.exportVal().prenom);
        
        this.administrations.push({
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
