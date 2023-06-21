import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Warehouse} from './warehouse';
import * as WarehouseActions from './warehouse.actions';

export const warehouseFeatureKey = 'warehouses';

export interface WarehouseState extends EntityState<Warehouse> {
    allWarehousesLoaded: boolean;
    currentWarehouse: Warehouse
}

export const adapter: EntityAdapter<Warehouse> = createEntityAdapter<Warehouse>();

export const initialState: WarehouseState = adapter.getInitialState({
    allWarehousesLoaded: false,
    currentWarehouse: null
});

const warehouseReducer = createReducer(
    initialState,
    on(WarehouseActions.addWarehouseSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentWarehouse: action.data}),
    ),
    on(WarehouseActions.deleteWarehouseSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(WarehouseActions.loadWarehousesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(WarehouseActions.selectCurrentWarehouseSuccess,
        (state, action) => ({...state, currentWarehouse: action.data}),
    ),
);

export function reducer(state: WarehouseState | undefined, action: Action) {
    return warehouseReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
