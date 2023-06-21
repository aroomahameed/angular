import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Customeraccdata} from './customeraccdata';
import * as CustomeraccdataActions from './customeraccdata.actions';

export const customeraccdataFeatureKey = 'customeraccdatas';

export interface CustomeraccdataState extends EntityState<Customeraccdata> {
    allCustomeraccdatasLoaded: boolean;
    currentCustomeraccdata: Customeraccdata
}

export const adapter: EntityAdapter<Customeraccdata> = createEntityAdapter<Customeraccdata>();

export const initialState: CustomeraccdataState = adapter.getInitialState({
    allCustomeraccdatasLoaded: false,
    currentCustomeraccdata: null
});

const customeraccdataReducer = createReducer(
    initialState,
    on(CustomeraccdataActions.addCustomeraccdataSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentCustomeraccdata: action.data}),
    ),
    on(CustomeraccdataActions.deleteCustomeraccdataSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(CustomeraccdataActions.loadCustomeraccdatasSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(CustomeraccdataActions.selectCurrentCustomeraccdataSuccess,
        (state, action) => ({...state, currentCustomeraccdata: action.data}),
    ),
);

export function reducer(state: CustomeraccdataState | undefined, action: Action) {
    return customeraccdataReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
