import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Head} from './head.model';
import * as HeadActions from './head.actions';

export const headFeatureKey = 'heads';

export interface HeadState extends EntityState<Head> {
    allLoaded: boolean;
}

export const adapter: EntityAdapter<Head> = createEntityAdapter<Head>();

export const initialState: HeadState = adapter.getInitialState({
    allLoaded: false,
});

const headReducer = createReducer(
    initialState,
    on(HeadActions.addHeadSuccess,
        (state, action) => adapter.upsertOne(action.data, state),
    ),
    on(HeadActions.deleteHeadSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(HeadActions.loadHeadsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
);

export function reducer(state: HeadState | undefined, action: Action) {
    return headReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
