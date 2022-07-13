import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoEffects } from './todo.effects';
import * as fromStore from './todo.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromStore.coreStoreFeatureKey, fromStore.reducer),
  ],
})
export class ToDoStoreModule {}
