import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Testtansaction} from './testtansaction';
import * as TesttansactionActions from './testtansaction.actions';

export const testtansactionFeatureKey = 'testtansactions';

export interface TesttansactionState extends EntityState<Testtansaction> {
    allTesttansactionsLoaded: boolean;
    currentTesttansaction: Testtansaction
}

export const adapter: EntityAdapter<Testtansaction> = createEntityAdapter<Testtansaction>();

export const initialState: TesttansactionState = adapter.getInitialState({
    allTesttansactionsLoaded: false,
    currentTesttansaction: null
});

const testtansactionReducer = createReducer(
    initialState,
    on(TesttansactionActions.addTesttansactionSuccess,
        (state, action) => adapter.upsertOne(action.data, ({...state, currentTesttansaction: action.data})),
    ),
    on(TesttansactionActions.deleteTesttansactionSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(TesttansactionActions.loadTesttansactionsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(TesttansactionActions.selectCurrentTesttansactionSuccess,
        (state, action) => ({...state, currentTesttansaction: action.data}),
    ),
);

export function reducer(state: TesttansactionState | undefined, action: Action) {
    return testtansactionReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
