import {createAction, props} from '@ngrx/store';

import {Warehouse} from './warehouse';

export const loadWarehouses = createAction(
    '[Warehouse/API] Load Warehouses'
);

export const loadWarehousesSuccess = createAction(
    '[Warehouse/API] Load Warehouses Success',
    props<{ data: Warehouse[] }>(),
);

export const addWarehouse = createAction(
    '[Warehouse/API] Add Warehouse',
    props<{ data: Warehouse }>(),
);

export const addWarehouseSuccess = createAction(
    '[Warehouse/API] Add Warehouse Success',
    props<{ data: Warehouse }>(),
);


export const deleteWarehouse = createAction(
    '[Warehouse/API] Delete Warehouse',
    props<{ data: Warehouse }>(),
);

export const deleteWarehouseSuccess = createAction(
    '[Warehouse/API] Delete Warehouse Success',
    props<{ id: string}>(),
);

export const selectCurrentWarehouseSuccess = createAction(
    '[Warehouse/API] Select Current Warehouse',
    props<{ data: Warehouse }>(),
);

