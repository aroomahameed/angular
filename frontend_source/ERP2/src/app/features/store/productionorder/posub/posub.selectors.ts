import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Posub } from './posub';
import {PosubState, posubFeatureKey, selectAll} from './posub.reducer';

const featureState = createFeatureSelector<PosubState>(posubFeatureKey);

export const selectAllPosubs = createSelector(
    featureState,
    selectAll,
);

export const allPosubLoaded = createSelector(
    featureState,
    state => state.allPosubsLoaded,
);

export const selectCurrentPosub = createSelector(
    featureState,
    state =>{
        return state.currentPosub
    } 
)
export const selectByPOSubID = createSelector(
    selectAllPosubs,
 
    (POsub: Posub[], id) => {
       
        const PO = POsub.filter(s => s.id == id)
      
        return PO;
    }
)
