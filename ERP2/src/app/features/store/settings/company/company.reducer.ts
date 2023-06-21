import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Company} from './company';
import * as CompanyActions from './company.actions';

export const companyFeatureKey = 'companys';

export interface CompanyState extends EntityState<Company> {
    allCompanysLoaded: boolean;
    currentCompany: Company
}

export const adapter: EntityAdapter<Company> = createEntityAdapter<Company>();

export const initialState: CompanyState = adapter.getInitialState({
    allCompanysLoaded: false,
    currentCompany: null
});

const companyReducer = createReducer(
    initialState,
    on(CompanyActions.addCompanySuccess,
        (state, action) => adapter.upsertOne(action.data, {...state, currentCompany: action.data}),
    ),
    on(CompanyActions.deleteCompanySuccess,
        (state, action) => adapter.removeOne(action.id, state),
    ),

    on(CompanyActions.loadCompanysSuccess,
        (state, action) => adapter.addAll(action.data, state),
    ),
    on(CompanyActions.selectCurrentCompanySuccess,
        (state, action) => ({...state, currentCompany: action.data}),
    ),
);

export function reducer(state: CompanyState | undefined, action: Action) {
    return companyReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
