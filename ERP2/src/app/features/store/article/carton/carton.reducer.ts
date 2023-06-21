import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Carton} from './carton';
import * as CartonActions from './carton.actions';

export const cartonFeatureKey = 'cartons';

export interface CartonState extends EntityState<Carton> {
    allCartonsLoaded: boolean;
    currentCarton: Carton
}

export const adapter: EntityAdapter<Carton> = createEntityAdapter<Carton>();

export const initialState: CartonState = adapter.getInitialState({
    allCartonsLoaded: false,
    currentCarton: null
});

const cartonReducer = createReducer(
    initialState,
    on(CartonActions.addCartonSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentCarton: action.data}),
    ),
    on(CartonActions.deleteCartonSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(CartonActions.loadCartonsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(CartonActions.selectCurrentCartonSuccess,
        (state, action) => ({...state, currentCarton: action.data}),
    ),
);

export function reducer(state: CartonState | undefined, action: Action) {
    return cartonReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
