import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Materialvendor} from './materialvendor';
import * as MaterialvendorActions from './materialvendor.actions';

export const materialvendorFeatureKey = 'materialvendors';

export interface MaterialvendorState extends EntityState<Materialvendor> {
    allMaterialvendorsLoaded: boolean;
    currentMaterialvendor: Materialvendor
}

export const adapter: EntityAdapter<Materialvendor> = createEntityAdapter<Materialvendor>();

export const initialState: MaterialvendorState = adapter.getInitialState({
    allMaterialvendorsLoaded: false,
    currentMaterialvendor: null
});

const materialvendorReducer = createReducer(
    initialState,
    on(MaterialvendorActions.addMaterialvendorSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentMaterialvendor: action.data}),
    ),
    on(MaterialvendorActions.deleteMaterialvendorSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(MaterialvendorActions.loadMaterialvendorsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(MaterialvendorActions.selectCurrentMaterialvendorSuccess,
        (state, action) => ({...state, currentMaterialvendor: action.data}),
    ),
);

export function reducer(state: MaterialvendorState | undefined, action: Action) {
    return materialvendorReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
