import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Reservepo} from './reservepo'
import {ReservepoState, reservepoFeatureKey, selectAll} from './reservepo.reducer';

const featureState = createFeatureSelector<ReservepoState>(reservepoFeatureKey);

export const selectAllReservepos = createSelector(
    featureState,
    selectAll,
);

export const allReservepoLoaded = createSelector(
    featureState,
    state => state.allReserveposLoaded,
);

export const selectCurrentReservepo = createSelector(
    featureState,
    state => state.currentReservepo
)
export const selectByPO = createSelector(
    selectAllReservepos,
  
    (respo: Reservepo[], {client, customer, model,article,size,prdline,material}) => {
       
        const po = respo.filter(s => s.client == client && s.customer==customer && s.model==model && s.article==article && s.article_size==size && s.article_pl==prdline && s.material==material)
        return po;
    }
)
