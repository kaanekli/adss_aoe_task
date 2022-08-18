import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUnits } from './components/unitsdata/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aeo';
  units$ = this._store$.select(selectUnits);
  constructor(private readonly _store$: Store){}
}
