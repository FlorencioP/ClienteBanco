import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BancoPichinchaPageRoutingModule } from './banco-pichincha-routing.module';

import { BancoPichinchaPage } from './banco-pichincha.page';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BancoPichinchaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [BancoPichinchaPage]
})
export class BancoPichinchaPageModule {}
