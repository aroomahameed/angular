import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Customeraccgroup} from './customeraccgroup';
import * as CustomeraccgroupActions from './customeraccgroup.actions';

export const customeraccgroupFeatureKey = 'customeraccgroups';

export interface CustomeraccgroupState extends EntityState<Customeraccgroup> {
    allCustomeraccgroupsLoaded: boolean;
    currentCustomeraccgroup: Customeraccgroup
}

export const adapter: EntityAdapter<Customeraccgroup> = createEntityAdapter<Customeraccgroup>();

export const initialState: CustomeraccgroupState = adapter.getInitialState({
    allCustomeraccgroupsLoaded: false,
    currentCustomeraccgroup: null
});

const customeraccgroupReducer = createReducer(
    initialState,
    on(CustomeraccgroupActions.addCustomeraccgroupSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentCustomeraccgroup: action.data}),
    ),
    on(CustomeraccgroupActions.deleteCustomeraccgroupSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(CustomeraccgroupActions.loadCustomeraccgroupsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(CustomeraccgroupActions.selectCurrentCustomeraccgroupSuccess,
        (state, action) => ({...state, currentCustomeraccgroup: action.data}),
    ),
);

export function reducer(state: CustomeraccgroupState | undefined, action: Action) {
    return customeraccgroupReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
