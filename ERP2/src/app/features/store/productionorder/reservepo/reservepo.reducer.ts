import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Reservepo} from './reservepo';
import * as ReservepoActions from './reservepo.actions';

export const reservepoFeatureKey = 'reservepos';

export interface ReservepoState extends EntityState<Reservepo> {
    allReserveposLoaded: boolean;
    currentReservepo: Reservepo
}

export const adapter: EntityAdapter<Reservepo> = createEntityAdapter<Reservepo>();

export const initialState: ReservepoState = adapter.getInitialState({
    allReserveposLoaded: false,
    currentReservepo: null
});

const reservepoReducer = createReducer(
    initialState,
    on(ReservepoActions.addReservepoSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentReservepo: action.data}),
    ),
    on(ReservepoActions.deleteReservepoSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ReservepoActions.loadReserveposSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ReservepoActions.selectCurrentReservepoSuccess,
        (state, action) => ({...state, currentReservepo: action.data}),
    ),
);

export function reducer(state: ReservepoState | undefined, action: Action) {
    return reservepoReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
