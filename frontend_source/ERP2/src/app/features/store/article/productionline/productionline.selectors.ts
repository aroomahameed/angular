import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Productionline } from './productionline';
import {ProductionlineState, productionlineFeatureKey, selectAll} from './productionline.reducer';

const featureState = createFeatureSelector<ProductionlineState>(productionlineFeatureKey);
const relationId = (value: any) => value && value.id ? value.id : value;

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
        const lines = prdlines.filter(pl => relationId(pl.size) == id)
        return lines;
    }
)
