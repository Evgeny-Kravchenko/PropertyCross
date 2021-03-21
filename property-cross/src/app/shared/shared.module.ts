import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { InputComponent } from '@shared/components/input/input.component';
import { ReponseMessageComponent } from '@shared/components/reponse-message/reponse-message.component';

@NgModule({
  declarations: [
    LoadingComponent,
    ButtonComponent,
    InputComponent,
    ReponseMessageComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    LoadingComponent,
    ButtonComponent,
    IonicModule,
    InputComponent,
    ReponseMessageComponent,
  ],
})
export class SharedModule {}
