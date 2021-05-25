import { Component} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {MissionDataModel} from "../../models/MissionDataModel";
import {MissionDataService} from "../../services/mission-data.service";
import {Observable} from "rxjs";
import {AlertController} from "@ionic/angular";
import { ToastController } from '@ionic/angular';
import { TacheDataModel } from "../../models/TacheDataModel";
import { ModalController} from '@ionic/angular';


@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage  {

  addform:boolean;
  fini:boolean;
  techs = [];
  entreprises = [];

  Taches = true;

  
  
  

  newTache: TacheDataModel = {
    nom: [],
    date: '',
    nomTechnicien:[],
    chefDeChantier:[],
    termine: false
  };
  mission: MissionDataModel = new MissionDataModel();
  missions:Observable<MissionDataModel[]>;
  items: string[];
  
  constructor(
    public afDB: AngularFireDatabase,
    public toastController: ToastController, 
    private missionDataService: MissionDataService,
    public afAuth: AngularFireAuth,
    private router: Router,
    public alertController: AlertController,
    private modalController:ModalController
   
  ) {}
   // Récupérer la liste des missions quand on entre dans la peg
  ngOnInit(){
    this.missions = this.missionDataService.getMissions();
    
    
  }

 
 
 

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
 

  

  signOut(){
    this.afAuth.signOut();
    this.router.navigateByUrl('/connection')
  }

 
 
 
 

}
