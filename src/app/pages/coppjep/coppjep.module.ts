import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoppjepPageRoutingModule } from './coppjep-routing.module';

import { CoppjepPage } from './coppjep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoppjepPageRoutingModule
  ],
  declarations: [CoppjepPage]
})
export class CoppjepPageModule {}
