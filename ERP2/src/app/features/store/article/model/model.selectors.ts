import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Model } from './model';
import {ModelState, modelFeatureKey, selectAll} from './model.reducer';

const featureState = createFeatureSelector<ModelState>(modelFeatureKey);

export const selectAllModels = createSelector(
    featureState,
    selectAll,
);

export const allModelLoaded = createSelector(
    featureState,
    state => state.allModelsLoaded,
);

export const selectCurrentModel = createSelector(
    featureState,
    state => state.currentModel
)

export const selectByClientID = createSelector(
    selectAllModels,
    (models: Model[], id) => {
        const model = models.filter(m => m.client.id == id)
        return model;
    }
)

