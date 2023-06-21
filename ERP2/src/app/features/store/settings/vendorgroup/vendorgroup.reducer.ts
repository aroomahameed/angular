import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Vendorgroup} from './vendorgroup';
import * as VendorgroupActions from './vendorgroup.actions';

export const vendorgroupFeatureKey = 'vendorgroups';

export interface VendorgroupState extends EntityState<Vendorgroup> {
    allVendorgroupsLoaded: boolean;
    currentVendorgroup: Vendorgroup
}

export const adapter: EntityAdapter<Vendorgroup> = createEntityAdapter<Vendorgroup>();

export const initialState: VendorgroupState = adapter.getInitialState({
    allVendorgroupsLoaded: false,
    currentVendorgroup: null
});

const vendorgroupReducer = createReducer(
    initialState,
    on(VendorgroupActions.addVendorgroupSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentVendorgroup: action.data}),
    ),
    on(VendorgroupActions.deleteVendorgroupSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(VendorgroupActions.loadVendorgroupsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(VendorgroupActions.selectCurrentVendorgroupSuccess,
        (state, action) => ({...state, currentVendorgroup: action.data}),
    ),
);

export function reducer(state: VendorgroupState | undefined, action: Action) {
    return vendorgroupReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
