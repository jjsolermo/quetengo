import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongeladorPageRoutingModule } from './congelador-routing.module';

import { CongeladorPage } from './congelador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongeladorPageRoutingModule
  ],
  declarations: [CongeladorPage]
})
export class CongeladorPageModule {}
