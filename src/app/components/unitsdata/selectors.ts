import { unitState, featureKey } from "./reducer";
import { createSelector, createFeatureSelector } from '@ngrx/store';


export const selectFeatureState = createFeatureSelector<unitState>(featureKey);

export const selectUnits = createSelector(selectFeatureState,
    (state: unitState) => state.units);


/**export const selectUnits = createSelector(
    selectFeatureState, (state) => state.units.filter
    (
        (m) => m.id > 18
    ));
    
    filtrelemek için selectoru kullanmak istedim fakat actionla daha iyi olurmuş geç fark ettim,
    ngrx'e hakimiyetim çok az, task gelince 
    öğrendim açıkçası, mantıken kavradım teknik açıdan
    pek olmadı..
    dataları selectorla seçip ui'a yönlendirdim, cost objcet olarak kaldı cost için bi state
    tanımlayamadım.
    tslint yerine de eslint import ettim, tslint desteklenmiyormuş bu sürümde.
    beklenilenin %10 unu yapmış olabilirim yine de atmak istedim, kolay gelsin.*/
