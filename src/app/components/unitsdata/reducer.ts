import { createReducer } from "@ngrx/store";
import { Unit, units, Cost } from "./unitsdata";

export const featureKey = 'uniteState';


export interface unitState {
  units: Unit[],
}


const initialState: unitState = {
  units: units,}

export const reducer = createReducer(initialState);