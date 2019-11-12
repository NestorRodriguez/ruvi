import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NivelesEducacionPage } from './niveles-educacion.page';

const routes: Routes = [
  {
    path: '',
    component: NivelesEducacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NivelesEducacionPage]
})
export class NivelesEducacionPageModule {}
