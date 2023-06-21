import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Customerexportdata} from './customerexportdata';
import * as CustomerexportdataActions from './customerexportdata.actions';

export const customerexportdataFeatureKey = 'customerexportdatas';

export interface CustomerexportdataState extends EntityState<Customerexportdata> {
    allCustomerexportdatasLoaded: boolean;
    currentCustomerexportdata: Customerexportdata
}

export const adapter: EntityAdapter<Customerexportdata> = createEntityAdapter<Customerexportdata>();

export const initialState: CustomerexportdataState = adapter.getInitialState({
    allCustomerexportdatasLoaded: false,
    currentCustomerexportdata: null
});

const customerexportdataReducer = createReducer(
    initialState,
    on(CustomerexportdataActions.addCustomerexportdataSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentCustomerexportdata: action.data}),
    ),
    on(CustomerexportdataActions.deleteCustomerexportdataSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(CustomerexportdataActions.loadCustomerexportdatasSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(CustomerexportdataActions.selectCurrentCustomerexportdataSuccess,
        (state, action) => ({...state, currentCustomerexportdata: action.data}),
    ),
);

export function reducer(state: CustomerexportdataState | undefined, action: Action) {
    return customerexportdataReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
