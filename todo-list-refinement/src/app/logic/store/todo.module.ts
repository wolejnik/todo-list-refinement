import { TodoEffects } from './todo.effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './todo.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forFeature(fromStore.coreStoreFeatureKey, fromStore.reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class ToDoStoreModule {}
