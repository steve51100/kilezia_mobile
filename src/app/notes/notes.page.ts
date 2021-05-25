import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  uploadPdfs =[];

  constructor(public afDB: AngularFireDatabase) { this.getUploadPdf(); }

  ngOnInit() {
  }
//affichage liste pdf
getUploadPdf() {
  this.afDB.list('uploads/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
    this.uploadPdfs = [];
    actions.forEach(action => {
      console.log('info:' + action.payload.exportVal().name);
      console.log('info:' + action.payload.exportVal().url);
      
      this.uploadPdfs.push({
        key: action.key,
        name:  action.payload.exportVal().name,
        url : action.payload.exportVal().url,
      });
    });
  });
}
}
