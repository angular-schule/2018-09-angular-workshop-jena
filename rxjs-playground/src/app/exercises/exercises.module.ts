import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { FromeventComponent } from './1_fromevent/fromevent.component';
import { MulticastComponent } from './3_multicast/multicast.component';
import { HistoryComponent } from './history/history.component';
import { HigherorderComponent } from './7_higherorder/higherorder.component';
import { GameScoreComponent } from './2_game-score/game-score.component';
import { ErrorHandlingComponent } from './4_error-handling/error-handling.component';
import { ChatComponent } from './6_chat/chat.component';
import { ChatWindowComponent } from './6_chat/chat-window/chat-window.component';
import { UnsubscribeComponent } from './5_unsubscribe/unsubscribe.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ExercisesRoutingModule
  ],
  declarations: [
    OverviewComponent,
    FromeventComponent,
    MulticastComponent,
    HistoryComponent,
    HigherorderComponent,
    GameScoreComponent,
    ErrorHandlingComponent,
    ChatComponent,
    ChatWindowComponent,
    UnsubscribeComponent
  ]
})
export class ExercisesModule { }
