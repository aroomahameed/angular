import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Balltest} from './balltest';
import * as BalltestActions from './balltest.actions';

export const balltestFeatureKey = 'balltests';

export interface BalltestState extends EntityState<Balltest> {
    allBalltestsLoaded: boolean;
    currentBalltest: Balltest
}

export const adapter: EntityAdapter<Balltest> = createEntityAdapter<Balltest>();

export const initialState: BalltestState = adapter.getInitialState({
    allBalltestsLoaded: false,
    currentBalltest: null
});

const balltestReducer = createReducer(
    initialState,
    on(BalltestActions.addBalltestSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentBalltest: action.data}),
    ),
    on(BalltestActions.deleteBalltestSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(BalltestActions.loadBalltestsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(BalltestActions.selectCurrentBalltestSuccess,
        (state, action) => ({...state, currentBalltest: action.data}),
    ),
);

export function reducer(state: BalltestState | undefined, action: Action) {
    return balltestReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
