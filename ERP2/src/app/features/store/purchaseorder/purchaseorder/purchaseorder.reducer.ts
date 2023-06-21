import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Purchaseorder} from './purchaseorder';
import * as PurchaseorderActions from './purchaseorder.actions';

export const purchaseorderFeatureKey = 'purchaseorders';

export interface PurchaseorderState extends EntityState<Purchaseorder> {
    allPurchaseordersLoaded: boolean;
    currentPurchaseorder: Purchaseorder
}

export const adapter: EntityAdapter<Purchaseorder> = createEntityAdapter<Purchaseorder>();

export const initialState: PurchaseorderState = adapter.getInitialState({
    allPurchaseordersLoaded: false,
    currentPurchaseorder: null
});

const purchaseorderReducer = createReducer(
    initialState,
    on(PurchaseorderActions.addPurchaseorderSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentPurchaseorder: action.data}),
    ),
    on(PurchaseorderActions.deletePurchaseorderSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(PurchaseorderActions.loadPurchaseordersSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(PurchaseorderActions.selectCurrentPurchaseorderSuccess,
        (state, action) => ({...state, currentPurchaseorder: action.data}),
    ),
);

export function reducer(state: PurchaseorderState | undefined, action: Action) {
    return purchaseorderReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
