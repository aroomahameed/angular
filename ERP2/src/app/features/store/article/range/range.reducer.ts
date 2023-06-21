import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Range} from './range';
import * as RangeActions from './range.actions';

export const rangeFeatureKey = 'ranges';

export interface RangeState extends EntityState<Range> {
    allRangesLoaded: boolean;
    currentRange: Range
}

export const adapter: EntityAdapter<Range> = createEntityAdapter<Range>();

export const initialState: RangeState = adapter.getInitialState({
    allRangesLoaded: false,
    currentRange: null
});

const rangeReducer = createReducer(
    initialState,
    on(RangeActions.addRangeSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentRange: action.data}),
    ),
    on(RangeActions.deleteRangeSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(RangeActions.loadRangesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(RangeActions.selectCurrentRangeSuccess,
        (state, action) => ({...state, currentRange: action.data}),
    ),
);

export function reducer(state: RangeState | undefined, action: Action) {
    return rangeReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
