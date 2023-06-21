import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Productionline} from './productionline';
import * as ProductionlineActions from './productionline.actions';

export const productionlineFeatureKey = 'productionlines';

export interface ProductionlineState extends EntityState<Productionline> {
    allProductionlinesLoaded: boolean;
    currentProductionline: Productionline
}

export const adapter: EntityAdapter<Productionline> = createEntityAdapter<Productionline>();

export const initialState: ProductionlineState = adapter.getInitialState({
    allProductionlinesLoaded: false,
    currentProductionline: null
});

const productionlineReducer = createReducer(
    initialState,
    on(ProductionlineActions.addProductionlineSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentProductionline: action.data}),
    ),
    on(ProductionlineActions.deleteProductionlineSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ProductionlineActions.loadProductionlinesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ProductionlineActions.selectCurrentProductionlineSuccess,
        (state, action) => ({...state, currentProductionline: action.data}),
    ),
);

export function reducer(state: ProductionlineState | undefined, action: Action) {
    return productionlineReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
