import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Productionline } from './productionline';
import {ProductionlineState, productionlineFeatureKey, selectAll} from './productionline.reducer';

const featureState = createFeatureSelector<ProductionlineState>(productionlineFeatureKey);

export const selectAllProductionlines = createSelector(
    featureState,
    selectAll,
);

export const allProductionlineLoaded = createSelector(
    featureState,
    state => state.allProductionlinesLoaded,
);

export const selectCurrentProductionline = createSelector(
    featureState,
    state => state.currentProductionline
)
export const selectByArticlesizeID = createSelector(
    
    selectAllProductionlines,
  
    (prdlines: Productionline[], id) => {
        const lines = prdlines.filter(pl => pl.size.id == id)
        return lines;
    }
)
