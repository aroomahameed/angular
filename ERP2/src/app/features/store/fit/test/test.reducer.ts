import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Test} from './test';
import * as TestActions from './test.actions';

export const testFeatureKey = 'tests';

export interface TestState extends EntityState<Test> {
    allTestsLoaded: boolean;
    currentTest: Test
}

export const adapter: EntityAdapter<Test> = createEntityAdapter<Test>();

export const initialState: TestState = adapter.getInitialState({
    allTestsLoaded: false,
    currentTest: null
});

const testReducer = createReducer(
    initialState,
    on(TestActions.addTestSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentTest: action.data}),
    ),
    on(TestActions.deleteTestSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(TestActions.loadTestsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(TestActions.selectCurrentTestSuccess,
        (state, action) => ({...state, currentTest: action.data}),
    ),
);

export function reducer(state: TestState | undefined, action: Action) {
    return testReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
