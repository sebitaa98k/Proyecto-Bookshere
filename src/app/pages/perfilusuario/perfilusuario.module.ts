import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilusuarioPageRoutingModule } from './perfilusuario-routing.module';

import { PerfilusuarioPage } from './perfilusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilusuarioPageRoutingModule
  ],
  declarations: [PerfilusuarioPage]
})
export class PerfilusuarioPageModule {}
