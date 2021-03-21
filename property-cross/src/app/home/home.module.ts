import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { SharedModule } from '@shared/shared.module';
import { ResultsListComponent } from './components/results-list/results-list.component';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, HomePageRoutingModule, SharedModule],
  declarations: [HomePage, ResultsListComponent],
})
export class HomePageModule {}
