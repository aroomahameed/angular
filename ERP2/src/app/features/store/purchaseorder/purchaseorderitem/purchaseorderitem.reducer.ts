import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Purchaseorderitem} from './purchaseorderitem';
import * as PurchaseorderitemActions from './purchaseorderitem.actions';

export const purchaseorderitemFeatureKey = 'purchaseorderitems';

export interface PurchaseorderitemState extends EntityState<Purchaseorderitem> {
    allPurchaseorderitemsLoaded: boolean;
    currentPurchaseorderitem: Purchaseorderitem
}

export const adapter: EntityAdapter<Purchaseorderitem> = createEntityAdapter<Purchaseorderitem>();

export const initialState: PurchaseorderitemState = adapter.getInitialState({
    allPurchaseorderitemsLoaded: false,
    currentPurchaseorderitem: null
});

const purchaseorderitemReducer = createReducer(
    initialState,
    on(PurchaseorderitemActions.addPurchaseorderitemSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentPurchaseorderitem: action.data}),
    ),
    on(PurchaseorderitemActions.deletePurchaseorderitemSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(PurchaseorderitemActions.loadPurchaseorderitemsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(PurchaseorderitemActions.selectCurrentPurchaseorderitemSuccess,
        (state, action) => ({...state, currentPurchaseorderitem: action.data}),
    ),
);

export function reducer(state: PurchaseorderitemState | undefined, action: Action) {
    return purchaseorderitemReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
