import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TiempoLaborPage } from './tiempo-labor.page';

const routes: Routes = [
  {
    path: '',
    component: TiempoLaborPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TiempoLaborPage]
})
export class TiempoLaborPageModule {}
