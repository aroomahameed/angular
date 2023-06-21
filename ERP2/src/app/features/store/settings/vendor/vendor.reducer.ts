import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Vendor} from './vendor';
import * as VendorActions from './vendor.actions';

export const vendorFeatureKey = 'vendors';

export interface VendorState extends EntityState<Vendor> {
    allVendorsLoaded: boolean;
    currentVendor: Vendor
}

export const adapter: EntityAdapter<Vendor> = createEntityAdapter<Vendor>();

export const initialState: VendorState = adapter.getInitialState({
    allVendorsLoaded: false,
    currentVendor: null
});

const vendorReducer = createReducer(
    initialState,
    on(VendorActions.addVendorSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentVendor: action.data}),
    ),
    on(VendorActions.deleteVendorSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(VendorActions.loadVendorsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(VendorActions.selectCurrentVendorSuccess,
        (state, action) => ({...state, currentVendor: action.data}),
    ),
);

export function reducer(state: VendorState | undefined, action: Action) {
    return vendorReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
