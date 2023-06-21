import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Uom} from './uom';
import * as UomActions from './uom.actions';

export const uomFeatureKey = 'uoms';

export interface UomState extends EntityState<Uom> {
    allUomsLoaded: boolean;
    currentUom: Uom
}

export const adapter: EntityAdapter<Uom> = createEntityAdapter<Uom>();

export const initialState: UomState = adapter.getInitialState({
    allUomsLoaded: false,
    currentUom: null
});

const uomReducer = createReducer(
    initialState,
    on(UomActions.addUomSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentUom: action.data}),
    ),
    on(UomActions.deleteUomSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(UomActions.loadUomsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(UomActions.selectCurrentUomSuccess,
        (state, action) => ({...state, currentUom: action.data}),
    ),
);

export function reducer(state: UomState | undefined, action: Action) {
    return uomReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
