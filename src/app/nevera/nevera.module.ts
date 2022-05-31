import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeveraPageRoutingModule } from './nevera-routing.module';

import { NeveraPage } from './nevera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeveraPageRoutingModule
  ],
  declarations: [NeveraPage]
})
export class NeveraPageModule {}
