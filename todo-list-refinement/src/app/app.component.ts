import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { loadAll } from './logic/store/todo.actions';
import * as TodoStoreSelectors from './logic/store/todo.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'todo-list-refinement';

  constructor(private translate: TranslateService, private store: Store) {
    this.translate.setDefaultLang('pl');
    this.translate.use('pl');
  }
}
