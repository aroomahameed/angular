import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Paymentterm} from './paymentterm';
import * as PaymenttermActions from './paymentterm.actions';

export const paymenttermFeatureKey = 'paymentterms';

export interface PaymenttermState extends EntityState<Paymentterm> {
    allPaymenttermsLoaded: boolean;
    currentPaymentterm: Paymentterm
}

export const adapter: EntityAdapter<Paymentterm> = createEntityAdapter<Paymentterm>();

export const initialState: PaymenttermState = adapter.getInitialState({
    allPaymenttermsLoaded: false,
    currentPaymentterm: null
});

const paymenttermReducer = createReducer(
    initialState,
    on(PaymenttermActions.addPaymenttermSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentPaymentterm: action.data}),
    ),
    on(PaymenttermActions.deletePaymenttermSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(PaymenttermActions.loadPaymenttermsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(PaymenttermActions.selectCurrentPaymenttermSuccess,
        (state, action) => ({...state, currentPaymentterm: action.data}),
    ),
);

export function reducer(state: PaymenttermState | undefined, action: Action) {
    return paymenttermReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
