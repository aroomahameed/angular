import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Pohead } from './pohead';
import {PoheadState, poheadFeatureKey, selectAll} from './pohead.reducer';

const featureState = createFeatureSelector<PoheadState>(poheadFeatureKey);

export const selectAllPoheads = createSelector(
    featureState,
    selectAll,
);

export const allPoheadLoaded = createSelector(
    featureState,
    state => state.allPoheadsLoaded,
);

export const selectCurrentPohead = createSelector(
    featureState,
    state => 
    {
        return state.currentPohead
    }
  
)

export const selectByPOID = createSelector(
    selectAllPoheads,
 
    (POHead: Pohead[], id) => {
       
        const PO = POHead.filter(s => s.id == id)
      
        return PO;
    }
)
