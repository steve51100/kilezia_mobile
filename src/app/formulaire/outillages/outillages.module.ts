import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutillagesPageRoutingModule } from './outillages-routing.module';

import { OutillagesPage } from './outillages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutillagesPageRoutingModule
  ],
  declarations: [OutillagesPage]
})
export class OutillagesPageModule {}
