import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Customer} from './customer';
import * as CustomerActions from './customer.actions';

export const customerFeatureKey = 'customers';

export interface CustomerState extends EntityState<Customer> {
    allCustomersLoaded: boolean;
    currentCustomer: Customer
}

export const adapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

export const initialState: CustomerState = adapter.getInitialState({
    allCustomersLoaded: false,
    currentCustomer: null
});

const customerReducer = createReducer(
    initialState,
    on(CustomerActions.addCustomerSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentCustomer: action.data}),
    ),
    on(CustomerActions.deleteCustomerSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(CustomerActions.loadCustomersSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(CustomerActions.selectCurrentCustomerSuccess,
        (state, action) => ({...state, currentCustomer: action.data}),
    ),
);

export function reducer(state: CustomerState | undefined, action: Action) {
    return customerReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
