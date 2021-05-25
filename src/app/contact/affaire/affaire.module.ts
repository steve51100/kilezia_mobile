import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AffairePageRoutingModule } from './affaire-routing.module';

import { AffairePage } from './affaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AffairePageRoutingModule
  ],
  declarations: [AffairePage]
})
export class AffairePageModule {}
