import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Serviceidentifier} from './serviceidentifier';
import * as ServiceidentifierActions from './serviceidentifier.actions';

export const serviceidentifierFeatureKey = 'serviceidentifiers';

export interface ServiceidentifierState extends EntityState<Serviceidentifier> {
    allServiceidentifiersLoaded: boolean;
    currentServiceidentifier: Serviceidentifier
}

export const adapter: EntityAdapter<Serviceidentifier> = createEntityAdapter<Serviceidentifier>();

export const initialState: ServiceidentifierState = adapter.getInitialState({
    allServiceidentifiersLoaded: false,
    currentServiceidentifier: null
});

const serviceidentifierReducer = createReducer(
    initialState,
    on(ServiceidentifierActions.addServiceidentifierSuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentServiceidentifier: action.data}),
    ),
    on(ServiceidentifierActions.deleteServiceidentifierSuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(ServiceidentifierActions.loadServiceidentifiersSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(ServiceidentifierActions.selectCurrentServiceidentifierSuccess,
        (state, action) => ({...state, currentServiceidentifier: action.data}),
    ),
);

export function reducer(state: ServiceidentifierState | undefined, action: Action) {
    return serviceidentifierReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
