import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NucleoFamiliarPage } from './nucleo-familiar.page';

const routes: Routes = [
  {
    path: '',
    component: NucleoFamiliarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NucleoFamiliarPage]
})
export class NucleoFamiliarPageModule {}
