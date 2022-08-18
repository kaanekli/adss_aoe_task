import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUnits } from './selectors';

@Component({
  selector: 'app-unitsdata',
  templateUrl: './unitsdata.component.html',
  styleUrls: ['./unitsdata.component.scss']
})
export class UnitsdataComponent {  units$ = this._store$.select(selectUnits);

  constructor(private readonly _store$: Store){}
  
 
}
