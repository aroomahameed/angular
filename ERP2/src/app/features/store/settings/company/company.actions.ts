import {createAction, props} from '@ngrx/store';

import {Company} from './company';

export const loadCompanys = createAction(
    '[Company/API] Load Companys'
);

export const loadCompanysSuccess = createAction(
    '[Company/API] Load Companys Success',
    props<{ data: Company[] }>(),
);

export const addCompany = createAction(
    '[Company/API] Add Company',
    props<{ data: any }>(),
);


export const addCompanySuccess = createAction(
    '[Company/API] Add Company Success',
    props<{ data: Company }>(),
);


export const deleteCompany = createAction(
    '[Company/API] Delete Company',
    props<{ data: Company }>(),
);

export const deleteCompanySuccess = createAction(
    '[Company/API] Delete Company Success',
    props<{ id: string}>(),
);

export const selectCurrentCompanySuccess = createAction(
    '[Company/API] Select Current Company',
    props<{ data: Company }>(),
);

