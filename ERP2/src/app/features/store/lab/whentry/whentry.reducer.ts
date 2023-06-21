import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Whentry} from './whentry';
import * as WhentryActions from './whentry.actions';

export const whentryFeatureKey = 'whentrys';

export interface WhentryState extends EntityState<Whentry> {
    allWhentrysLoaded: boolean;
    currentWhentry: Whentry
}

export const adapter: EntityAdapter<Whentry> = createEntityAdapter<Whentry>();

export const initialState: WhentryState = adapter.getInitialState({
    allWhentrysLoaded: false,
    currentWhentry: null
});

const whentryReducer = createReducer(
    initialState,
    on(WhentryActions.addWhentrySuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentWhentry: action.data}),
    ),
    on(WhentryActions.deleteWhentrySuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(WhentryActions.loadWhentrysSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(WhentryActions.selectCurrentWhentrySuccess,
        (state, action) => ({...state, currentWhentry: action.data}),
    ),
);

export function reducer(state: WhentryState | undefined, action: Action) {
    return whentryReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
