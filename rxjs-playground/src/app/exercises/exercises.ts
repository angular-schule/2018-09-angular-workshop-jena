import { Exercises } from '../shared/types';
import { FromeventComponent } from './1_fromevent/fromevent.component';
import { MulticastComponent } from './3_multicast/multicast.component';
import { HigherorderComponent } from './7_higherorder/higherorder.component';
import { GameScoreComponent } from './2_game-score/game-score.component';
import { ErrorHandlingComponent } from './4_error-handling/error-handling.component';
import { ChatComponent } from './6_chat/chat.component';
import { UnsubscribeComponent } from './5_unsubscribe/unsubscribe.component';


export const exercisesList: Exercises = [
    { name: 'Window resize: Observables from events', folder: '1_fromevent', component: FromeventComponent },
    { name: 'Game Score: scan and reduce', folder: '2_game-score', component: GameScoreComponent },
    { name: 'Multicasting with Subjects', folder: '3_multicast', component: MulticastComponent },
    { name: 'Error handling', folder: '4_error-handling', component: ErrorHandlingComponent },
    { name: 'How to unsubscribe and avoid memory leaks', folder: '5_unsubscribe', component: UnsubscribeComponent },
    { name: 'Chat: Merging Observables', folder: '6_chat', component: ChatComponent },
    { name: 'Higher Order Observables with concatMap, mergeMap, switchMap, exhaustMap', folder: '7_higherorder', component: HigherorderComponent },
];
