import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Customerlabelingdata} from './customerlabelingdata';
import * as CustomerlabelingdataActions from './customerlabelingdata.actions';

export const customerlabelingdataFeatureKey = 'customerlabelingdatas';

export interface CustomerlabelingdataState extends EntityState<Customerlabelingdata> {
    allCustomerlabelingdatasLoaded: boolean;
    currentCustomerlabelingdata: Customerlabelingdata
}

export const adapter: EntityAdapter<Customerlabelingdata> = createEntityAdapter<Customerlabelingdata>();

export const initialState: CustomerlabelingdataState = adapter.getInitialState({
    allCustomerlabelingdatasLoaded: false,
    currentCustomerlabelingdata: null
});

const customerlabelingdataReducer = createReducer(
    initialState,
    on(CustomerlabelingdataActions.addCustomerlabelingdataSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentCustomerlabelingdata: action.data}),
    ),
    on(CustomerlabelingdataActions.deleteCustomerlabelingdataSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(CustomerlabelingdataActions.loadCustomerlabelingdatasSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(CustomerlabelingdataActions.selectCurrentCustomerlabelingdataSuccess,
        (state, action) => ({...state, currentCustomerlabelingdata: action.data}),
    ),
);

export function reducer(state: CustomerlabelingdataState | undefined, action: Action) {
    return customerlabelingdataReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
