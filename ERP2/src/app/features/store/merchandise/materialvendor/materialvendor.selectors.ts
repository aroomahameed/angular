import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Materialvendor } from './materialvendor';
import {MaterialvendorState, materialvendorFeatureKey, selectAll} from './materialvendor.reducer';

const featureState = createFeatureSelector<MaterialvendorState>(materialvendorFeatureKey);

export const selectAllMaterialvendors = createSelector(
    featureState,
    selectAll,
);

export const allMaterialvendorLoaded = createSelector(
    featureState,
    state => state.allMaterialvendorsLoaded,
);

export const selectCurrentMaterialvendor = createSelector(
    featureState,
    state => state.currentMaterialvendor
)
export const selectBymaterialID = createSelector(
    selectAllMaterialvendors,
    (material: Materialvendor[], id) => {
        
        const mat = material.filter(m => m.material.id == id)
      
        return mat;
    }
)

