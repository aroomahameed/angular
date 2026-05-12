import {createAction, props} from '@ngrx/store';

import {Article} from './article';

export const loadArticles = createAction(
    '[Article/API] Load Articles'
);

export const loadArticlesSuccess = createAction(
    '[Article/API] Load Articles Success',
    props<{ data: Article[] }>(),
);

export const addArticle = createAction(
    '[Article/API] Add Article',
    props<{ data: any }>(),
);

export const addArticleSuccess = createAction(
    '[Article/API] Add Article Success',
    props<{ data: Article }>(),
);


export const deleteArticle = createAction(
    '[Article/API] Delete Article',
    props<{ data: Article }>(),
);

export const deleteArticleSuccess = createAction(
    '[Article/API] Delete Article Success',
    props<{ id: string}>(),
);

export const selectCurrentArticleSuccess = createAction(
    '[Article/API] Select Current Article',
    props<{ data: Article }>(),
);

