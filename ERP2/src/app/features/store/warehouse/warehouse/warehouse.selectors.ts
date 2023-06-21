import {createFeatureSelector, createSelector} from '@ngrx/store';
import {WarehouseState, warehouseFeatureKey, selectAll} from './warehouse.reducer';

const featureState = createFeatureSelector<WarehouseState>(warehouseFeatureKey);

export const selectAllWarehouses = createSelector(
    featureState,
    selectAll,
);

export const allWarehouseLoaded = createSelector(
    featureState,
    state => state.allWarehousesLoaded,
);

export const selectCurrentWarehouse = createSelector(
    featureState,
    state => state.currentWarehouse
)

