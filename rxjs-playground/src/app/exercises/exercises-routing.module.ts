import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { FromeventComponent } from './1_fromevent/fromevent.component';
import { GameScoreComponent } from './2_game-score/game-score.component';
import { MulticastComponent } from './3_multicast/multicast.component';
import { ErrorHandlingComponent } from './4_error-handling/error-handling.component';
import { UnsubscribeComponent } from './5_unsubscribe/unsubscribe.component';
import { ChatComponent } from './6_chat/chat.component';
import { HigherorderComponent } from './7_higherorder/higherorder.component';

const routes: Routes = [
  { path: 'exercises', component: OverviewComponent },
  { path: 'exercises/1', component: FromeventComponent },
  { path: 'exercises/2', component: GameScoreComponent },
  { path: 'exercises/3', component: MulticastComponent },
  { path: 'exercises/4', component: ErrorHandlingComponent },
  { path: 'exercises/5', component: UnsubscribeComponent },
  { path: 'exercises/6', component: ChatComponent },
  { path: 'exercises/7', component: HigherorderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
