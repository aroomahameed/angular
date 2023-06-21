import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Podetail} from './podetail';
import * as PodetailActions from './podetail.actions';

export const podetailFeatureKey = 'podetails';

export interface PodetailState extends EntityState<Podetail> {
    allPodetailsLoaded: boolean;
    currentPodetail: Podetail
}

export const adapter: EntityAdapter<Podetail> = createEntityAdapter<Podetail>();

export const initialState: PodetailState = adapter.getInitialState({
    allPodetailsLoaded: false,
    currentPodetail: null
});

const podetailReducer = createReducer(
    initialState,
    on(PodetailActions.addPodetailSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentPodetail: action.data}),
    ),
    on(PodetailActions.deletePodetailSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(PodetailActions.loadPodetailsSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(PodetailActions.selectCurrentPodetailSuccess,
        (state, action) => ({...state, currentPodetail: action.data}),
    ),
);

export function reducer(state: PodetailState | undefined, action: Action) {
    return podetailReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
