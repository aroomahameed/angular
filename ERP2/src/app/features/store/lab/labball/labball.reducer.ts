import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Labball} from './labball';
import * as LabballActions from './labball.actions';

export const labballFeatureKey = 'labballs';

export interface LabballState extends EntityState<Labball> {
    allLabballsLoaded: boolean;
    currentLabball: Labball
}

export const adapter: EntityAdapter<Labball> = createEntityAdapter<Labball>();

export const initialState: LabballState = adapter.getInitialState({
    allLabballsLoaded: false,
    currentLabball: null
});

const labballReducer = createReducer(
    initialState,
    on(LabballActions.addLabballSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentLabball: action.data}),
    ),
    on(LabballActions.deleteLabballSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(LabballActions.loadLabballsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(LabballActions.selectCurrentLabballSuccess,
        (state, action) => ({...state, currentLabball: action.data}),
    ),
);

export function reducer(state: LabballState | undefined, action: Action) {
    return labballReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
