import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Line} from './line';
import * as LineActions from './line.actions';

export const lineFeatureKey = 'lines';

export interface LineState extends EntityState<Line> {
    allLinesLoaded: boolean;
    currentLine: Line
}

export const adapter: EntityAdapter<Line> = createEntityAdapter<Line>();

export const initialState: LineState = adapter.getInitialState({
    allLinesLoaded: false,
    currentLine: null
});

const lineReducer = createReducer(
    initialState,
    on(LineActions.addLineSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentLine: action.data}),
    ),
    on(LineActions.deleteLineSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(LineActions.loadLinesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(LineActions.selectCurrentLineSuccess,
        (state, action) => ({...state, currentLine: action.data}),
    ),
);

export function reducer(state: LineState | undefined, action: Action) {
    return lineReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
