import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Delayreasoncode} from './delayreasoncode';
import * as DelayreasoncodeActions from './delayreasoncode.actions';

export const delayreasoncodeFeatureKey = 'delayreasoncodes';

export interface DelayreasoncodeState extends EntityState<Delayreasoncode> {
    allDelayreasoncodesLoaded: boolean;
    currentDelayreasoncode: Delayreasoncode
}

export const adapter: EntityAdapter<Delayreasoncode> = createEntityAdapter<Delayreasoncode>();

export const initialState: DelayreasoncodeState = adapter.getInitialState({
    allDelayreasoncodesLoaded: false,
    currentDelayreasoncode: null
});

const delayreasoncodeReducer = createReducer(
    initialState,
    on(DelayreasoncodeActions.addDelayreasoncodeSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentDelayreasoncode: action.data}),
    ),
    on(DelayreasoncodeActions.deleteDelayreasoncodeSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(DelayreasoncodeActions.loadDelayreasoncodesSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(DelayreasoncodeActions.selectCurrentDelayreasoncodeSuccess,
        (state, action) => ({...state, currentDelayreasoncode: action.data}),
    ),
);

export function reducer(state: DelayreasoncodeState | undefined, action: Action) {
    return delayreasoncodeReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
