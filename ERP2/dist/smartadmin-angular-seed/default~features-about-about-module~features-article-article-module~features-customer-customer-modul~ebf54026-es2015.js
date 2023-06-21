(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~features-about-about-module~features-article-article-module~features-customer-customer-modul~ebf54026"],{

/***/ "./node_modules/@ngrx/entity/fesm2015/entity.js":
/*!******************************************************!*\
  !*** ./node_modules/@ngrx/entity/fesm2015/entity.js ***!
  \******************************************************/
/*! exports provided: createEntityAdapter, Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityAdapter", function() { return createEntityAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * @license NgRx 8.6.0
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template V
 * @return {?}
 */
function getInitialEntityState() {
    return {
        ids: [],
        entities: {},
    };
}
/**
 * @template V
 * @return {?}
 */
function createInitialStateFactory() {
    /**
     * @param {?=} additionalState
     * @return {?}
     */
    function getInitialState(additionalState = {}) {
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @return {?}
 */
function createSelectorsFactory() {
    /**
     * @param {?=} selectState
     * @return {?}
     */
    function getSelectors(selectState) {
        /** @type {?} */
        const selectIds = (/**
         * @param {?} state
         * @return {?}
         */
        (state) => state.ids);
        /** @type {?} */
        const selectEntities = (/**
         * @param {?} state
         * @return {?}
         */
        (state) => state.entities);
        /** @type {?} */
        const selectAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, selectEntities, (/**
         * @param {?} ids
         * @param {?} entities
         * @return {?}
         */
        (ids, entities) => ids.map((/**
         * @param {?} id
         * @return {?}
         */
        (id) => ((/** @type {?} */ (entities)))[id]))));
        /** @type {?} */
        const selectTotal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, (/**
         * @param {?} ids
         * @return {?}
         */
        ids => ids.length));
        if (!selectState) {
            return {
                selectIds,
                selectEntities,
                selectAll,
                selectTotal,
            };
        }
        return {
            selectIds: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectIds),
            selectEntities: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectEntities),
            selectAll: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectAll),
            selectTotal: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectTotal),
        };
    }
    return { getSelectors };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const DidMutate = {
    EntitiesOnly: 0,
    Both: 1,
    None: 2,
};
DidMutate[DidMutate.EntitiesOnly] = 'EntitiesOnly';
DidMutate[DidMutate.Both] = 'Both';
DidMutate[DidMutate.None] = 'None';
/**
 * @template V, R
 * @param {?} mutator
 * @return {?}
 */
function createStateOperator(mutator) {
    return (/**
     * @template S
     * @param {?} arg
     * @param {?} state
     * @return {?}
     */
    function operation(arg, state) {
        /** @type {?} */
        const clonedEntityState = {
            ids: [...state.ids],
            entities: Object.assign({}, state.entities),
        };
        /** @type {?} */
        const didMutate = mutator(arg, clonedEntityState);
        if (didMutate === DidMutate.Both) {
            return Object.assign({}, state, clonedEntityState);
        }
        if (didMutate === DidMutate.EntitiesOnly) {
            return Object.assign({}, state, { entities: clonedEntityState.entities });
        }
        return state;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} entity
 * @param {?} selectId
 * @return {?}
 */
function selectIdValue(entity, selectId) {
    /** @type {?} */
    const key = selectId(entity);
    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && key === undefined) {
        console.warn('@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', entity, 'The `selectId` implementation:', selectId.toString());
    }
    return key;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} selectId
 * @return {?}
 */
function createUnsortedStateAdapter(selectId) {
    /**
     * @param {?} entity
     * @param {?} state
     * @return {?}
     */
    function addOneMutably(entity, state) {
        /** @type {?} */
        const key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return DidMutate.None;
        }
        state.ids.push(key);
        state.entities[key] = entity;
        return DidMutate.Both;
    }
    /**
     * @param {?} entities
     * @param {?} state
     * @return {?}
     */
    function addManyMutably(entities, state) {
        /** @type {?} */
        let didMutate = false;
        for (const entity of entities) {
            didMutate = addOneMutably(entity, state) !== DidMutate.None || didMutate;
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
    }
    /**
     * @param {?} entities
     * @param {?} state
     * @return {?}
     */
    function addAllMutably(entities, state) {
        state.ids = [];
        state.entities = {};
        addManyMutably(entities, state);
        return DidMutate.Both;
    }
    /**
     * @param {?} key
     * @param {?} state
     * @return {?}
     */
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    /**
     * @param {?} keysOrPredicate
     * @param {?} state
     * @return {?}
     */
    function removeManyMutably(keysOrPredicate, state) {
        /** @type {?} */
        const keys = keysOrPredicate instanceof Array
            ? keysOrPredicate
            : state.ids.filter((/**
             * @param {?} key
             * @return {?}
             */
            (key) => keysOrPredicate(state.entities[key])));
        /** @type {?} */
        const didMutate = keys
            .filter((/**
         * @param {?} key
         * @return {?}
         */
        (key) => key in state.entities))
            .map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => delete state.entities[key])).length > 0;
        if (didMutate) {
            state.ids = state.ids.filter((/**
             * @param {?} id
             * @return {?}
             */
            (id) => id in state.entities));
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
    }
    /**
     * @template S
     * @param {?} state
     * @return {?}
     */
    function removeAll(state) {
        return Object.assign({}, state, {
            ids: [],
            entities: {},
        });
    }
    /**
     * @param {?} keys
     * @param {?} update
     * @param {?} state
     * @return {?}
     */
    function takeNewKey(keys, update, state) {
        /** @type {?} */
        const original = state.entities[update.id];
        /** @type {?} */
        const updated = Object.assign({}, original, update.changes);
        /** @type {?} */
        const newKey = selectIdValue(updated, selectId);
        /** @type {?} */
        const hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    /**
     * @param {?} update
     * @param {?} state
     * @return {?}
     */
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    /**
     * @param {?} updates
     * @param {?} state
     * @return {?}
     */
    function updateManyMutably(updates, state) {
        /** @type {?} */
        const newKeys = {};
        updates = updates.filter((/**
         * @param {?} update
         * @return {?}
         */
        update => update.id in state.entities));
        /** @type {?} */
        const didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            /** @type {?} */
            const didMutateIds = updates.filter((/**
             * @param {?} update
             * @return {?}
             */
            update => takeNewKey(newKeys, update, state))).length > 0;
            if (didMutateIds) {
                state.ids = state.ids.map((/**
                 * @param {?} id
                 * @return {?}
                 */
                (id) => newKeys[id] || id));
                return DidMutate.Both;
            }
            else {
                return DidMutate.EntitiesOnly;
            }
        }
        return DidMutate.None;
    }
    /**
     * @param {?} map
     * @param {?} state
     * @return {?}
     */
    function mapMutably(map, state) {
        /** @type {?} */
        const changes = state.ids.reduce((/**
         * @param {?} changes
         * @param {?} id
         * @return {?}
         */
        (changes, id) => {
            /** @type {?} */
            const change = map(state.entities[id]);
            if (change !== state.entities[id]) {
                changes.push({ id, changes: change });
            }
            return changes;
        }), []);
        /** @type {?} */
        const updates = changes.filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ id }) => id in state.entities));
        return updateManyMutably(updates, state);
    }
    /**
     * @param {?} entity
     * @param {?} state
     * @return {?}
     */
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    /**
     * @param {?} entities
     * @param {?} state
     * @return {?}
     */
    function upsertManyMutably(entities, state) {
        /** @type {?} */
        const added = [];
        /** @type {?} */
        const updated = [];
        for (const entity of entities) {
            /** @type {?} */
            const id = selectIdValue(entity, selectId);
            if (id in state.entities) {
                updated.push({ id, changes: entity });
            }
            else {
                added.push(entity);
            }
        }
        /** @type {?} */
        const didMutateByUpdated = updateManyMutably(updated, state);
        /** @type {?} */
        const didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
    }
    return {
        removeAll,
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        addAll: createStateOperator(addAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably),
        map: createStateOperator(mapMutably),
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} selectId
 * @param {?} sort
 * @return {?}
 */
function createSortedStateAdapter(selectId, sort) {
    const { removeOne, removeMany, removeAll } = createUnsortedStateAdapter(selectId);
    /**
     * @param {?} entity
     * @param {?} state
     * @return {?}
     */
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    /**
     * @param {?} newModels
     * @param {?} state
     * @return {?}
     */
    function addManyMutably(newModels, state) {
        /** @type {?} */
        const models = newModels.filter((/**
         * @param {?} model
         * @return {?}
         */
        model => !(selectIdValue(model, selectId) in state.entities)));
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            merge(models, state);
            return DidMutate.Both;
        }
    }
    /**
     * @param {?} models
     * @param {?} state
     * @return {?}
     */
    function addAllMutably(models, state) {
        state.entities = {};
        state.ids = [];
        addManyMutably(models, state);
        return DidMutate.Both;
    }
    /**
     * @param {?} update
     * @param {?} state
     * @return {?}
     */
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    /**
     * @param {?} models
     * @param {?} update
     * @param {?} state
     * @return {?}
     */
    function takeUpdatedModel(models, update, state) {
        if (!(update.id in state.entities)) {
            return false;
        }
        /** @type {?} */
        const original = state.entities[update.id];
        /** @type {?} */
        const updated = Object.assign({}, original, update.changes);
        /** @type {?} */
        const newKey = selectIdValue(updated, selectId);
        delete state.entities[update.id];
        models.push(updated);
        return newKey !== update.id;
    }
    /**
     * @param {?} updates
     * @param {?} state
     * @return {?}
     */
    function updateManyMutably(updates, state) {
        /** @type {?} */
        const models = [];
        /** @type {?} */
        const didMutateIds = updates.filter((/**
         * @param {?} update
         * @return {?}
         */
        update => takeUpdatedModel(models, update, state))).length >
            0;
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            /** @type {?} */
            const originalIds = state.ids;
            /** @type {?} */
            const updatedIndexes = [];
            state.ids = state.ids.filter((/**
             * @param {?} id
             * @param {?} index
             * @return {?}
             */
            (id, index) => {
                if (id in state.entities) {
                    return true;
                }
                else {
                    updatedIndexes.push(index);
                    return false;
                }
            }));
            merge(models, state);
            if (!didMutateIds &&
                updatedIndexes.every((/**
                 * @param {?} i
                 * @return {?}
                 */
                (i) => state.ids[i] === originalIds[i]))) {
                return DidMutate.EntitiesOnly;
            }
            else {
                return DidMutate.Both;
            }
        }
    }
    /**
     * @param {?} updatesOrMap
     * @param {?} state
     * @return {?}
     */
    function mapMutably(updatesOrMap, state) {
        /** @type {?} */
        const updates = state.ids.reduce((/**
         * @param {?} changes
         * @param {?} id
         * @return {?}
         */
        (changes, id) => {
            /** @type {?} */
            const change = updatesOrMap(state.entities[id]);
            if (change !== state.entities[id]) {
                changes.push({ id, changes: change });
            }
            return changes;
        }), []);
        return updateManyMutably(updates, state);
    }
    /**
     * @param {?} entity
     * @param {?} state
     * @return {?}
     */
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    /**
     * @param {?} entities
     * @param {?} state
     * @return {?}
     */
    function upsertManyMutably(entities, state) {
        /** @type {?} */
        const added = [];
        /** @type {?} */
        const updated = [];
        for (const entity of entities) {
            /** @type {?} */
            const id = selectIdValue(entity, selectId);
            if (id in state.entities) {
                updated.push({ id, changes: entity });
            }
            else {
                added.push(entity);
            }
        }
        /** @type {?} */
        const didMutateByUpdated = updateManyMutably(updated, state);
        /** @type {?} */
        const didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
    }
    /**
     * @param {?} models
     * @param {?} state
     * @return {?}
     */
    function merge(models, state) {
        models.sort(sort);
        /** @type {?} */
        const ids = [];
        /** @type {?} */
        let i = 0;
        /** @type {?} */
        let j = 0;
        while (i < models.length && j < state.ids.length) {
            /** @type {?} */
            const model = models[i];
            /** @type {?} */
            const modelId = selectIdValue(model, selectId);
            /** @type {?} */
            const entityId = state.ids[j];
            /** @type {?} */
            const entity = state.entities[entityId];
            if (sort(model, entity) <= 0) {
                ids.push(modelId);
                i++;
            }
            else {
                ids.push(entityId);
                j++;
            }
        }
        if (i < models.length) {
            state.ids = ids.concat(models.slice(i).map(selectId));
        }
        else {
            state.ids = ids.concat(state.ids.slice(j));
        }
        models.forEach((/**
         * @param {?} model
         * @param {?} i
         * @return {?}
         */
        (model, i) => {
            state.entities[selectId(model)] = model;
        }));
    }
    return {
        removeOne,
        removeMany,
        removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        addAll: createStateOperator(addAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        map: createStateOperator(mapMutably),
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?=} options
 * @return {?}
 */
function createEntityAdapter(options = {}) {
    const { selectId, sortComparer } = Object.assign({ sortComparer: false, selectId: (/**
         * @param {?} instance
         * @return {?}
         */
        (instance) => instance.id) }, options);
    /** @type {?} */
    const stateFactory = createInitialStateFactory();
    /** @type {?} */
    const selectorsFactory = createSelectorsFactory();
    /** @type {?} */
    const stateAdapter = sortComparer
        ? createSortedStateAdapter(selectId, sortComparer)
        : createUnsortedStateAdapter(selectId);
    return Object.assign({ selectId,
        sortComparer }, stateFactory, selectorsFactory, stateAdapter);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class Dictionary {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=entity.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/custom-tables/table/table.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/custom-tables/table/table.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container table-responsive-md my-3\" *ngIf=\"_items as dataItems\">\n    <div class=\"row mb-3\">\n        <div class=\"col-sm-12 col-md-5 col-lg-3\">\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <label for=\"search\" class=\"input-group-text\"><i class=\"fal fa-search\"></i></label>\n                </div>\n                <input id=\"search\" type=\"text\" (keyup)=\"onSearch($event)\"\n                    class=\"form-control border-top-left-radius-0 border-bottom-left-radius-0 ml-0 width-lg shadow-inset-1\"\n                    placeholder=\"Search\">\n            </div>\n        </div>\n\n        <div class=\"col-sm-12 col-md-5 col-lg-3 ml-md-auto mt-2 mt-md-0\" style=\"max-width: 200px\">\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                    <label for=\"select_items\" class=\"input-group-text\">Show</label>\n                </div>\n                <select (change)=\"onItemCountChange($event)\" id=\"select_items\" name=\"dt-basic-example_length\"\n                    aria-controls=\"dt-basic-example\" class=\"form-control custom-select\">\n                    <option value=\"10\">10</option>\n                    <option value=\"15\">15</option>\n                    <option value=\"25\">25</option>\n                    <option value=\"50\">50</option>\n                    <option value=\"100\">100</option>\n                    <option value=\"-1\">All</option>\n                </select>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"btn btn-danger\" *ngIf=\"selectedItems.length > 0\" (click)=\"onDeleteMany()\">Delete\n                {{selectedItems.length}} {{selectedItems.length > 1 ? 'Items' : 'Item'}}</div>\n        </div>\n    </div>\n\n    <table class=\"table table-hover table-stripped table-bordered {{tableClasses}}\">\n        <thead class=\"{{headerClasses}} text-white\">\n            <tr>\n                <th style=\"width: 70px\" class=\"text-center\" *ngIf=\"selectable\">\n                    <div class=\"custom-control custom-checkbox\">\n                        <input class=\"custom-control-input\" id=\"select_all\" type=\"checkbox\"\n                            (change)=\"onSelectAll($event, dataItems)\">\n                        <label class=\"custom-control-label\" for=\"select_all\"></label>\n                    </div>\n\n                </th>\n                <th style=\"width: 100px; text-align: center\">Sr</th>\n                <th (click)=\"onSort(d)\" *ngFor=\"let d of columns\" id=\"{{d.value}}\" [ngStyle]=\"{'width': d.bool ? '100px' : '', 'text-align': d.bool ? 'center' : (d.align ? d.align : '')}\">\n                    <span (click)=\"onSort(d)\" class=\"d-inline-block\">{{d.title}}</span>\n                    <i [ngClass]=\"{'fa-angle-up': d.sort === 'asc', 'fa-angle-down': d.sort === 'desc' }\"\n                        class=\"fal text-white-50 ml-2\"></i>\n                </th>\n                <th *ngIf=\"showActions()\">Actions</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of dataItems | slice:startIndex:endIndex; let i = index\">\n                <td style=\"width: 70px\" class=\"text-center\" *ngIf=\"selectable\">\n                    <div class=\"custom-control custom-checkbox\">\n                        <input class=\"custom-control-input\" id=\"select_item_{{item.name}}\" type=\"checkbox\"\n                            [value]=\"item\" (change)=\"onItemSelect(item)\" [checked]=\"isItemSelected(item)\">\n                        <label class=\"custom-control-label\" for=\"select_item_{{item.name}}\"></label>\n                    </div>\n\n                </td>\n             \n                <td  style=\"width: 100px; text-align: center\">{{startIndex + i + 1}}</td>\n                <td\n                        *ngFor=\"let d of columns\"\n                        (click)=\"d.clickable ? onClick(item) : null\"\n                        [ngStyle]=\"{'width': d.bool ? '100px' : (d.width ? d.width+'px' : ''),\n                        'text-align': d.bool ? 'center' : (d.align ? d.align : ''), 'cursor': d.clickable ? 'pointer': ''}\">\n                    <ng-container *ngIf=\"d.bool;else second\">\n                        <span class=\"badge\" \n                            [ngClass]=\"{'badge-success': item[d.value], 'badge-secondary' : !item[d.value]}\">\n                            {{item[d.value] ? (d.boolText ? d.boolText.yes : 'Active') : (d.boolText ? d.boolText.no : 'In-Active')}}\n                        </span>\n                    </ng-container>\n                    <ng-template #second>\n                        <ng-container *ngIf=\"d.image;else third\">\n                            <img src=\"{{item[d.value]}}\" alt=\"{{d.value}}\"  class=\"rounded-circle\" style=\"width: 50px; height: 50px\">\n                            <!-- <img src=\"{{item[d.name]}}\" alt=\"{{d.name}}\" class=\"rounded-circle\" style=\"width: 50px; height: 50px\"> -->\n                        </ng-container>\n                    </ng-template>\n                    <ng-template #third>\n                        {{ d.date\n                            ? (getName(item, d.value) | date: d.dateFormat ? d.dateFormat : 'MMM dd , yyyy')\n                            : (d.money ? (getName(item, d.value) | number) : getName(item, d.value))\n                        }}\n                    </ng-template>\n\n                </td>\n\n                <td *ngIf=\"showActions()\" style=\"width: 150px; text-align: center\">\n                    <!-- <ng-content select=\"[buttons]\"></ng-content> -->\n                    <button *ngIf=\"View\" (click)=\"onView(item)\" class=\"btn btn-success badge mr-2\" [tooltip]=\"ViewToolTip\">\n                        <i class=\"fal fa-eye px-2 py-1\"></i>\n                    </button>\n                    <button *ngIf=\"createNext\" (click)=\"onCreateNext(item)\" class=\"btn btn-warning badge mr-2\" [tooltip]=\"createNextToolTip\">\n                        <i class=\"fal fa-plus px-2 py-1\"></i>\n                    </button>\n                    <button *ngIf=\"editable\" (click)=\"onEdit(item)\" class=\"btn btn-info badge\" tooltip=\"edit\"><i\n                            class=\"fal fa-edit px-2 py-1\"></i></button>\n                    <button *ngIf=\"deletable\" (click)=\"onDelete(item)\" class=\"btn btn-danger badge ml-2\" tooltip=\"delete\"><i\n                            class=\"fal fa-trash px-2 py-1\"></i></button>\n                </td>\n\n            </tr>\n        </tbody>\n    </table>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-6 ml-auto d-flex justify-content-end\" *ngIf=\"totalItems / itemsPerPage > 1\">\n            <pagination [boundaryLinks]=\"true\" [itemsPerPage]=\"itemsPerPage\" [totalItems]=\"totalItems\" [maxSize]=\"5\"\n                (numPages)=\"numPages = $event\" (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\"\n                nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n            </pagination>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/forms/checkbox/checkbox.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/forms/checkbox/checkbox.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row\">\n    <div class=\"col-md-2\">\n        <label>{{label}}</label>\n    </div>\n    <div class=\"custom-control custom-checkbox col-md-10\">\n        <input #input type=\"checkbox\" class=\"custom-control-input\" [id]=\"id\" [formControl]=\"control\">\n        <label class=\"custom-control-label\" [for]=\"id\">{{input.checked ? checkedLabel : unCheckedLabel}}</label>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/forms/form/form.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/forms/form/form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"row mb-3\" *ngFor=\"let d of data\">\n    <div [class]=\"columns(d.row)\" *ngFor=\"let row of d.row\">\n      <smart-input\n        *ngIf=\"\n          !row.type ||\n          row.type === 'text' ||\n          row.type === 'number' ||\n          row.type === 'email' ||\n          row.type === 'date'\n        \"\n        [label]=\"row.label\"\n        [formControlName]=\"row.name\"\n        [type]=\"row.type\"\n      ></smart-input>\n      <smart-checkbox\n        *ngIf=\"row.type && (row.type === 'checkbox' || row.type === 'check')\"\n        [checkedLabel]=\"row.checkedLabel ? row.checkedLabel : 'Active'\"\n        [unCheckedLabel]=\"row.unCheckedLabel ? row.unCheckedLabel : 'In-Active'\"\n        [formControlName]=\"row.name\"\n        [label]=\"row.label\"\n      ></smart-checkbox>\n      <smart-select\n        *ngIf=\"row.type && (row.type === 'select' || row.type === 'combobox')\"\n        [formControlName]=\"row.name\"\n        [items]=\"row.items\"\n        [label]=\"row.label\"\n      ></smart-select>\n    </div>\n  </div>\n\n  <div\n    class=\"border-faded border-left-0 border-right-0 border-bottom-0 d-flex flex-row align-items-center\"\n  >\n    <button\n      class=\"btn btn-primary ml-auto waves-effect waves-themed mt-2\"\n      type=\"submit\"\n    >\n      Submit\n    </button>\n    <button\n      class=\"btn btn-secondary ml-2 waves-effect waves-themed mt-2\"\n      type=\"reset\" (click)=\"onClear()\"\n    >\n      Clear\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/forms/input/input.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/forms/input/input.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label class=\"form-label\" [for]=\"id\">{{ label }}</label>\n  <input\n    [type]=\"type\"\n    [formControl]=\"control\"\n    class=\"form-control {{\n      control.invalid && control.touched && control.dirty ? 'is-invalid' : ''\n    }}\"\n    [id]=\"id\"\n    [value]=\"\"\n   \n  />\n  <div class=\"invalid-feedback\">\n    <span *ngIf=\"control.errors && control.errors['max']\"\n      >{{ label }} must be less than {{ control.errors[\"max\"][\"max\"] }}</span\n    >\n    <span *ngIf=\"control.errors && control.errors['min']\"\n      >{{ label }} must be greater than {{ control.errors[\"min\"][\"min\"] }}</span\n    >\n    <span *ngIf=\"control.errors && control.errors['email']\"\n      >{{ label }} must be a valid email</span\n    >\n    <span *ngIf=\"control.errors && control.errors['required']\"\n      >{{ error }}</span\n    >\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/forms/select/select.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/forms/select/select.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label class=\"form-label\" [for]=\"id\">{{ label }}</label>\n  <select\n    (change)=\"onChange($event)\"\n    [formControl]=\"control\"\n    class=\"form-control {{\n      control.invalid && control.touched && control.dirty ? 'is-invalid' : ''\n    }}\"\n    [id]=\"id\"\n  >\n  <option value=\"null\">Select an Option</option>\n  <option *ngFor=\"let item of items | async\" [value]='item.id'>{{getName(item)}}</option>\n  </select>\n  <div class=\"invalid-feedback\">\n    <span *ngIf=\"control.errors && control.errors['max']\"\n      >{{ label }} must be less than {{ control.errors[\"max\"][\"max\"] }}</span\n    >\n    <span *ngIf=\"control.errors && control.errors['min']\"\n      >{{ label }} must be greater than {{ control.errors[\"min\"][\"min\"] }}</span\n    >\n    <span *ngIf=\"control.errors && control.errors['email']\"\n      >{{ label }} must be a valid email</span\n    >\n    <span *ngIf=\"control.errors && control.errors['required']\">{{\n      error\n    }}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/panels/crud-panel/crud-panel-form/crud-panel-form.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/panels/crud-panel/crud-panel-form/crud-panel-form.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<smart-modal [title]=\"title\">\n    <smart-form body [data]=\"form\" (submitEvt)=\"onSubmit($event)\" (clearEvt)=\"onClear($event)\"></smart-form>\n</smart-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/panels/crud-panel/crud-panel.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/panels/crud-panel/crud-panel.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <smart-page-heading [title]=\"title\" [icon]=\"icon\" [description]=\"description\"></smart-page-heading> -->\n<smart-panel [fullscreenable]=\"fullscreenable\">\n    <h2 panelTitle>\n        <ng-content select=\"[title]\"></ng-content>\n    </h2>\n    <div panelToolbar class=\"mr-4\">\n        <button class=\"btn btn-primary\" (click)=\"onCreate()\"><i class=\"fal fa-plus-circle\"></i> Create</button>\n        <ng-content select=\"[toolbar]\"></ng-content>\n    </div>\n    \n    <div panelContent>\n        <smart-table [items]=\"items\" [columns]=\"columns\" (deleteEvt)=\"onDelete($event)\" (editEvt)=\"onEdit($event)\" \n         [deletable]=\"deleteable\" [editable]=\"editable\" [createNextToolTip] = \"createNextTooltip\"\n         (createNextEvt)=\"onCreateNext($event)\" [createNext]=\"createNext\">\n\n        </smart-table>\n    </div>\n</smart-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/panels/panel/panel.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/panels/panel/panel.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\" [ngClass]=\"pannelClasses\">\r\n  <div class=\"panel-hdr {{ headerClass }}\">\r\n    <ng-content select=\"[panelTitle]\" #panelTitle></ng-content>\r\n    <ng-content select=\"[panelToolbar]\"> </ng-content>\r\n    <div class=\"panel-toolbar\">\r\n      <button\r\n        *ngIf=\"collapsible\"\r\n        class=\"btn btn-panel\"\r\n        data-action=\"panel-collapse\"\r\n        (click)=\"toggleCollapse($event)\"\r\n        tooltip=\"Collapse\"\r\n      ></button>\r\n      <button\r\n        class=\"btn btn-panel\"\r\n        *ngIf=\"fullscreenable\"\r\n        data-action=\"panel-fullscreen\"\r\n        (click)=\"toggleFullscreen($event)\"\r\n        tooltip=\"Fullscreen\"\r\n      ></button>\r\n      <button\r\n        class=\"btn btn-panel\"\r\n        *ngIf=\"clossable\"\r\n        data-action=\"panel-close\"\r\n        (click)=\"closePanel($event)\"\r\n        tooltip=\"Close\"\r\n      ></button>      \r\n    </div>    \r\n  </div>\r\n\r\n  <div class=\"panel-container\" [ngClass]=\"pannelContainerClasses\">\r\n    <div\r\n      class=\"panel-content\"\r\n      [ngClass]=\"pannelContentClasses\"\r\n      *ngIf=\"!collapsed\"\r\n      [@slideInOut]\r\n    >\r\n      <ng-content select=\"[panelContent]\"> </ng-content>\r\n    </div>\r\n\r\n    <ng-content select=\"[panelFooter]\"> </ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/custom-tables/custom-tables.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/custom-tables/custom-tables.module.ts ***!
  \**************************************************************/
/*! exports provided: CustomTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTablesModule", function() { return CustomTablesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table/table.component */ "./src/app/shared/custom-tables/table/table.component.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");







let CustomTablesModule = class CustomTablesModule {
};
CustomTablesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ],
        exports: [_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"]]
    })
], CustomTablesModule);



/***/ }),

/***/ "./src/app/shared/custom-tables/table/table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/custom-tables/table/table.component.ts ***!
  \***************************************************************/
/*! exports provided: TableComponent, Align */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Align", function() { return Align; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let TableComponent = class TableComponent {
    constructor(cdr, store) {
        this.cdr = cdr;
        this.store = store;
        this.editable = false;
        this.headerClasses = 'bg-primary';
        this.tableClasses = 'table-sm';
        this.deletable = false;
        this.selectable = false;
        this.createNext = false;
        this.View = false;
        this.createNextToolTip = '';
        this.ViewToolTip = '';
        this.currentItemAction = '';
        this.deleteEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clickEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteMany = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.createNextEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.viewEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedItems = [];
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        // tslint:disable-next-line:variable-name
        this._items = [];
        // tslint:disable-next-line:variable-name
        this.__items = [];
        this.itemsPerPage = 10;
        this.startIndex = 0;
        this.endIndex = 10;
        this.currentPage = 1;
        this.totalItems = 0;
        this.numPages = 0;
    }
    ngOnInit() {
        this.sub = this.items.subscribe(data => {
            this.totalItems = data.length;
            this._items = data;
            this.__items = data;
            this.cdr.detectChanges();
        });
    }
    showActions() {
        return this.editable || this.deletable || this.createNext || this.View;
    }
    onDelete(item) {
        this.deleteEvt.emit(item);
    }
    onEdit(item) {
        if (this.currentItemAction !== '') {
            const action = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createAction"])(this.currentItemAction, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["props"])());
            this.store.dispatch(action({ data: item }));
        }
        this.editEvt.emit(item);
    }
    onClick(item) {
        this.clickEvt.emit(item);
    }
    pageChanged(event) {
        this.startIndex = (event.page - 1) * this.itemsPerPage;
        this.endIndex = this.startIndex + this.itemsPerPage;
    }
    onSearch(event) {
        // @ts-ignore
        let value = event.target.value;
        if (value) {
            value = value.toLowerCase();
        }
        const names = this.columns.map(c => c.value);
        this._items = this.__items.filter(item => {
            const stringNames = names.map(n => {
                const name = this.getName(item, n);
                if (typeof name === 'string') {
                    return this.getName(item, n).toLowerCase().includes(value);
                }
            });
            return stringNames.includes(true);
        });
    }
    onItemCountChange(event) {
        // @ts-ignore
        const val = event.target.value;
        if (val === '-1') {
            this.itemsPerPage = this.totalItems;
        }
        else {
            this.itemsPerPage = val;
        }
        this.currentPage = 1;
        this.startIndex = 0;
        this.endIndex = this.startIndex + this.itemsPerPage;
        this.cdr.detectChanges();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onSort(item) {
        if (item.sortable) {
            this.columns.forEach(c => {
                if (c.value !== item.value) {
                    c.sort = '';
                }
            });
            const column = this.columns.filter(col => col.value === item.value)[0];
            column.sort = column.sort === undefined ? 'asc' : (column.sort === 'asc' ? 'desc' : 'asc');
            const sort = column.sort === 'asc' ? 1 : -1;
            this._items = this.__items.sort((a, b) => a[item.value] < b[item.value] ? sort : -1 * sort);
        }
    }
    onItemSelect(item) {
        const index = this.selectedItems.find(i => i.id === item.id);
        if (index) {
            this.selectedItems = this.selectedItems.filter(i => i.id !== item.id);
        }
        else {
            this.selectedItems.push(item);
        }
        this.selectChange.emit(this.selectedItems);
    }
    getName(item, name) {
        if (typeof name === typeof []) {
            switch (name.length) {
                case 1:
                    return item[name[0]];
                case 2:
                    return item[name[0]][name[1]];
                case 3:
                    return item[name[0]][name[1]][name[2]];
                case 4:
                    return item[name[0]][name[1]][name[2]][name[3]];
                case 5:
                    return item[name[0]][name[1]][name[2]][name[3]][name[4]];
                case 6:
                    return item[name[0]][name[1]][name[2]][name[3]][name[4]][name[5]];
                case 7:
                    return item[name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]];
                default:
                    return item[name[0]];
            }
        }
        return item[name];
    }
    onSelectAll(event, items) {
        if (event.target.checked) {
            this.selectedItems = items;
        }
        else {
            this.selectedItems = [];
        }
        this.selectChange.emit(this.selectedItems);
    }
    isItemSelected(item) {
        return this.selectedItems.find(i => i === item) !== undefined;
    }
    onDeleteMany() {
        this.deleteMany.emit(this.selectedItems);
        this.selectedItems = [];
    }
    onCreateNext(item) {
        this.createNextEvt.emit(item);
    }
    onView(item) {
        this.viewEvent.emit(item);
    }
};
TableComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
], TableComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TableComponent.prototype, "columns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "editable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "headerClasses", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "tableClasses", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "deletable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "selectable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "createNext", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "View", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "createNextToolTip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "ViewToolTip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "currentItemAction", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "deleteEvt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "clickEvt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "searchEvt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "editEvt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "selectChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "deleteMany", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "createNextEvt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableComponent.prototype, "viewEvent", void 0);
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-table',
        template: __webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/custom-tables/table/table.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], TableComponent);

var Align;
(function (Align) {
    Align["LEFT"] = "left";
    Align["CENTER"] = "center";
    Align["RIGHT"] = "right";
})(Align || (Align = {}));


/***/ }),

/***/ "./src/app/shared/forms/checkbox/checkbox.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/forms/checkbox/checkbox.component.ts ***!
  \*************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var CheckboxComponent_1;


let CheckboxComponent = CheckboxComponent_1 = class CheckboxComponent {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.label = 'Checkbox Label';
        this.checkedLabel = 'Active';
        this.unCheckedLabel = 'In-Active';
        this.id = '';
    }
    get control() {
        return this.formControl || this.controlContainer.control.get(this.formControlName);
    }
    ngOnInit() {
        if (this.id === '') {
            this.id = this.label.replace(' ', '-').toLowerCase();
        }
        if (this.id === 'status') {
            this.id = 'checkbox-status';
        }
        if (!this.control.value) {
            this.control.patchValue(false);
        }
    }
    registerOnTouched(fn) {
        this.formControlDirective.valueAccessor.registerOnTouched(fn);
    }
    registerOnChange(fn) {
        this.formControlDirective.valueAccessor.registerOnChange(fn);
    }
    writeValue(obj) {
        this.formControlDirective.valueAccessor.writeValue(obj);
    }
    setDisabledState(isDisabled) {
        this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
    }
};
CheckboxComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"])
], CheckboxComponent.prototype, "formControlDirective", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
], CheckboxComponent.prototype, "formControl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CheckboxComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CheckboxComponent.prototype, "checkedLabel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CheckboxComponent.prototype, "unCheckedLabel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CheckboxComponent.prototype, "formControlName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CheckboxComponent.prototype, "id", void 0);
CheckboxComponent = CheckboxComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-checkbox',
        template: __webpack_require__(/*! raw-loader!./checkbox.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/forms/checkbox/checkbox.component.html"),
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: CheckboxComponent_1,
                multi: true
            }]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]])
], CheckboxComponent);



/***/ }),

/***/ "./src/app/shared/forms/form/form.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/forms/form/form.component.ts ***!
  \*****************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let FormComponent = class FormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clearEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.data = [];
        this.lastValues = {};
    }
    ngOnInit() {
        this.build();
    }
    build() {
        let form = {};
        this.data.forEach(data => {
            const row = data.row;
            row.forEach(col => {
                let value = col.value;
                if (value && typeof value === 'object') {
                    value = value.id;
                }
                form[col.name] = [{ value: value ? value : null, disabled: col.disable ? col.disable : false }, col.validator ? col.validator : null];
            });
        });
        this.formGroup = this.formBuilder.group(form);
    }
    onSubmit() {
        Object.keys(this.formGroup.controls).forEach(field => {
            const control = this.formGroup.get(field);
            control.markAsTouched({ onlySelf: true });
            control.markAsDirty({ onlySelf: true });
        });
        if (this.formGroup.invalid)
            return;
        this.submitEvt.emit(this.formGroup.getRawValue());
    }
    columns(row) {
        const num = Math.round(12 / row.length);
        return `col-md-${num}`;
    }
    onClear() {
        this.build();
        this.clearEvt.emit('');
    }
};
FormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormComponent.prototype, "submitEvt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormComponent.prototype, "clearEvt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], FormComponent.prototype, "data", void 0);
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/forms/form/form.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], FormComponent);



/***/ }),

/***/ "./src/app/shared/forms/forms.module.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/forms/forms.module.ts ***!
  \**********************************************/
/*! exports provided: CustomFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormsModule", function() { return CustomFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select/select.component */ "./src/app/shared/forms/select/select.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./src/app/shared/forms/form/form.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input/input.component */ "./src/app/shared/forms/input/input.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/shared/forms/checkbox/checkbox.component.ts");








const components = [_select_select_component__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_6__["InputComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"]];
let CustomFormsModule = class CustomFormsModule {
};
CustomFormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [...components],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        ],
        exports: [...components]
    })
], CustomFormsModule);



/***/ }),

/***/ "./src/app/shared/forms/input/input.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/forms/input/input.component.ts ***!
  \*******************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var InputComponent_1;


let InputComponent = InputComponent_1 = class InputComponent {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.label = 'Label';
        this.type = 'text';
        this.id = '';
        this.error = '';
        this.valye = '';
    }
    get control() {
        return this.formControl || this.controlContainer.control.get(this.formControlName);
    }
    ngOnInit() {
        if (this.id === '') {
            this.id = this.label.replace(' ', '-').toLowerCase();
        }
        if (this.error === '') {
            this.error = `${this.label} is required`;
        }
    }
    registerOnTouched(fn) {
        this.formControlDirective.valueAccessor.registerOnTouched(fn);
    }
    registerOnChange(fn) {
        this.formControlDirective.valueAccessor.registerOnChange(fn);
    }
    writeValue(obj) {
        this.formControlDirective.valueAccessor.writeValue(obj);
    }
    setDisabledState(isDisabled) {
        this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
    }
};
InputComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"])
], InputComponent.prototype, "formControlDirective", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
], InputComponent.prototype, "formControl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InputComponent.prototype, "formControlName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "error", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "valye", void 0);
InputComponent = InputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-input',
        template: __webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/forms/input/input.component.html"),
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: InputComponent_1,
                multi: true
            }]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]])
], InputComponent);



/***/ }),

/***/ "./src/app/shared/forms/select/select.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/forms/select/select.component.ts ***!
  \*********************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var SelectComponent_1;



let SelectComponent = SelectComponent_1 = class SelectComponent {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.label = 'Label';
        this.id = '';
        this.isOptional = true;
        this.error = '';
        this.changeEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.name = 'name';
    }
    get control() {
        return this.formControl || this.controlContainer.control.get(this.formControlName);
    }
    ngOnInit() {
        if (this.id === '') {
            this.id = this.label.replace(' ', '-').toLowerCase();
        }
        if (this.error === '') {
            this.error = `${this.label} is required`;
        }
    }
    onChange(event) {
        this.changeEvt.emit(event.target.value);
    }
    registerOnTouched(fn) {
        this.formControlDirective.valueAccessor.registerOnTouched(fn);
    }
    registerOnChange(fn) {
        this.formControlDirective.valueAccessor.registerOnChange(fn);
    }
    writeValue(obj) {
        this.formControlDirective.valueAccessor.writeValue(obj);
    }
    setDisabledState(isDisabled) {
        this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
    }
    getName(item) {
        if (typeof this.name === typeof []) {
            switch (this.name.length) {
                case 1:
                    return item[this.name[0]];
                case 2:
                    return item[this.name[0]][this.name[1]];
                case 3:
                    return item[this.name[0]][this.name[1]][this.name[2]];
                case 4:
                    return item[this.name[0]][this.name[1]][this.name[2]][this.name[3]];
                case 5:
                    return item[this.name[0]][this.name[1]][this.name[2]][this.name[3]][this.name[4]];
                case 6:
                    return item[this.name[0]][this.name[1]][this.name[2]][this.name[3]][this.name[4]][this.name[5]];
                case 7:
                    return item[this.name[0]][this.name[1]][this.name[2]][this.name[3]][this.name[4]][this.name[5]][this.name[6]];
                default:
                    return item[this.name[0]];
            }
        }
        return item[this.name];
    }
};
SelectComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"])
], SelectComponent.prototype, "formControlDirective", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"])
], SelectComponent.prototype, "formControl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SelectComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
], SelectComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SelectComponent.prototype, "formControlName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SelectComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SelectComponent.prototype, "isOptional", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SelectComponent.prototype, "error", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SelectComponent.prototype, "changeEvt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SelectComponent.prototype, "name", void 0);
SelectComponent = SelectComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-select',
        template: __webpack_require__(/*! raw-loader!./select.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/forms/select/select.component.html"),
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: SelectComponent_1,
                multi: true
            }]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]])
], SelectComponent);



/***/ }),

/***/ "./src/app/shared/panels/crud-panel/crud-panel-form/crud-panel-form.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/panels/crud-panel/crud-panel-form/crud-panel-form.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYW5lbHMvY3J1ZC1wYW5lbC9jcnVkLXBhbmVsLWZvcm0vY3J1ZC1wYW5lbC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/panels/crud-panel/crud-panel-form/crud-panel-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/panels/crud-panel/crud-panel-form/crud-panel-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CrudPanelFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudPanelFormComponent", function() { return CrudPanelFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let CrudPanelFormComponent = class CrudPanelFormComponent {
    constructor(store) {
        this.store = store;
        this.form = [];
        this.title = 'Title';
    }
    ngOnInit() {
        this.selected = this.store.select(this.current);
    }
    onSubmit(event) {
        const act = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(this.action, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
        // const sub = this.selected.subscribe(selectedd => {
        //   if(selectedd){
        //     event.id = selectedd.id
        //   }
        // })
        // sub.unsubscribe()
        this.store.dispatch(act({ data: event }));
        this.selected = this.store.select(this.current);
    }
    onClear(event) {
        const action = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(this.selectCurrentAction, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
        this.store.dispatch(action({ data: null }));
    }
};
CrudPanelFormComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CrudPanelFormComponent.prototype, "form", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CrudPanelFormComponent.prototype, "title", void 0);
CrudPanelFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'smart-crud-panel-form',
        template: __webpack_require__(/*! raw-loader!./crud-panel-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/panels/crud-panel/crud-panel-form/crud-panel-form.component.html"),
        styles: [__webpack_require__(/*! ./crud-panel-form.component.css */ "./src/app/shared/panels/crud-panel/crud-panel-form/crud-panel-form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
], CrudPanelFormComponent);



/***/ }),

/***/ "./src/app/shared/panels/crud-panel/crud-panel.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shared/panels/crud-panel/crud-panel.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYW5lbHMvY3J1ZC1wYW5lbC9jcnVkLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/panels/crud-panel/crud-panel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/panels/crud-panel/crud-panel.component.ts ***!
  \******************************************************************/
/*! exports provided: CrudPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudPanelComponent", function() { return CrudPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../dialogs/dialogs.service */ "./src/app/shared/dialogs/dialogs.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _crud_panel_form_crud_panel_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud-panel-form/crud-panel-form.component */ "./src/app/shared/panels/crud-panel/crud-panel-form/crud-panel-form.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let CrudPanelComponent = class CrudPanelComponent {
    constructor(modalService, store, dialogService) {
        this.modalService = modalService;
        this.store = store;
        this.dialogService = dialogService;
        this.title = '';
        this.description = '';
        this.icon = '';
        this.deleteItemName = 'name';
        this.deleteMessage = 'Do you wish to delete';
        this.editable = false;
        this.deleteable = false;
        this.createNext = false;
        this.createNextTooltip = '';
        this.modalClass = 'modal-xm';
        this.fullscreenable = false;
        this.createNextEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.itemName = '';
        this.pluralItemName = '';
    }
    ngOnInit() {
        this.pluralItemName = this.itemName.endsWith('y') ? this.itemName.substr(0, this.itemName.length - 1).concat('ies') : this.itemName.concat('s');
        this.selectAllAction = `[${this.itemName}/API] Load ${this.pluralItemName}`;
        this.selectCurrentAction = `[${this.itemName}/API] Select Current ${this.itemName}`;
        this.createAction = `[${this.itemName}/API] Add ${this.itemName}`;
        this.deleteAction = `[${this.itemName}/API] Delete ${this.itemName}`;
        const action = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createAction"])(this.selectAllAction);
        this.store.dispatch(action());
        this.items = this.store.select(this.selectAllSelector);
    }
    onCreate() {
        const action = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createAction"])(this.selectCurrentAction, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["props"])());
        this.store.dispatch(action({ data: null }));
        this.addFormID();
        this.form = this.form.map(element => {
            element.row.forEach(data => {
                if (data.type === 'check' || data.type === 'checkbox') {
                    data.value = false;
                }
                else {
                    data.value = null;
                }
            });
            return element;
        });
        this._formTitle = `Add ${this.itemName}`;
        //  console.log(action.type)
        this.modalService.show(_crud_panel_form_crud_panel_form_component__WEBPACK_IMPORTED_MODULE_3__["CrudPanelFormComponent"], {
            initialState: {
                action: this.createAction,
                form: this.form,
                title: this._formTitle,
                current: this.selectCurrent,
                selectCurrentAction: this.selectCurrentAction
            }, class: this.modalClass,
        });
    }
    onDelete(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = yield this.dialogService.confirm({
                title: `<i class='fal fa-times-circle text-danger mr-2'></i>
      ${this.deleteMessage} <span class='fw-500'>&nbsp;'${event[this.deleteItemName]}'&nbsp;</span>?`,
                message: `<span><strong>Warning:</strong> This action cannot be undone!</span>`,
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-danger shadow-0'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-default'
                    }
                }
            }).toPromise();
            if (result) {
                const action = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createAction"])(this.deleteAction, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["props"])());
                this.store.dispatch(action({ data: event }));
            }
        });
    }
    onEdit(event) {
        this.addFormID();
        const keys = Object.keys(event);
        this.form.forEach(element => {
            element.row.forEach(data => {
                keys.forEach(key => {
                    if (key === data.name) {
                        data['value'] = event[key];
                    }
                });
            });
        });
        // console.log(this.form)
        this._formTitle = `Edit ${this.itemName}`;
        this.modalService.show(_crud_panel_form_crud_panel_form_component__WEBPACK_IMPORTED_MODULE_3__["CrudPanelFormComponent"], {
            initialState: {
                action: this.createAction,
                form: this.form,
                title: this._formTitle,
                current: this.selectCurrent,
                selectCurrentAction: this.selectCurrentAction
            }, class: this.modalClass
        });
    }
    addFormID() {
        let found = false;
        this.form.forEach(data => {
            data.row.forEach(elm => {
                if (elm.label === 'ID') {
                    found = true;
                }
            });
        });
        if (!found) {
            this.form.push({ row: [{ label: 'ID', name: 'id', type: 'hidden' }] });
        }
    }
    onCreateNext(item) {
        this.createNextEvt.emit(item);
    }
};
CrudPanelComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_1__["DialogsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CrudPanelComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CrudPanelComponent.prototype, "description", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CrudPanelComponent.prototype, "icon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CrudPanelComponent.prototype, "columns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], CrudPanelComponent.prototype, "selectAllSelector", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], CrudPanelComponent.prototype, "selectCurrent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CrudPanelComponent.prototype, "deleteItemName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CrudPanelComponent.prototype, "deleteMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CrudPanelComponent.prototype, "form", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CrudPanelComponent.prototype, "editable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CrudPanelComponent.prototype, "deleteable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CrudPanelComponent.prototype, "createNext", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CrudPanelComponent.prototype, "createNextTooltip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CrudPanelComponent.prototype, "modalClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CrudPanelComponent.prototype, "fullscreenable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CrudPanelComponent.prototype, "createNextEvt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CrudPanelComponent.prototype, "itemName", void 0);
CrudPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'smart-crud-panel',
        template: __webpack_require__(/*! raw-loader!./crud-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/panels/crud-panel/crud-panel.component.html"),
        styles: [__webpack_require__(/*! ./crud-panel.component.css */ "./src/app/shared/panels/crud-panel/crud-panel.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_1__["DialogsService"]])
], CrudPanelComponent);



/***/ }),

/***/ "./src/app/shared/panels/panel/panel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/panels/panel/panel.component.ts ***!
  \********************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/animations */ "./src/app/shared/utils/animations.ts");
/* harmony import */ var _utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils.functions */ "./src/app/shared/utils/utils.functions.ts");
/* harmony import */ var _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/dialogs.service */ "./src/app/shared/dialogs/dialogs.service.ts");





let PanelComponent = class PanelComponent {
    constructor(headerClass, dialogs, el, renderer) {
        this.dialogs = dialogs;
        this.el = el;
        this.renderer = renderer;
        this.hasPannel = false;
        this.collapsible = false;
        this.collapsed = false;
        this.fullscreenable = false;
        this.headerClass = headerClass;
    }
    ngOnInit() {
        if (typeof this.collapsed !== 'undefined') {
            this.collapsible = true;
        }
        if (typeof this.fullscreenIn !== 'undefined') {
            this.fullscreenable = true;
        }
        if (typeof this.closed !== 'undefined') {
            this.clossable = true;
        }
    }
    ngOnChanges(changes) {
        // console.log(22, changes);
        // if (typeof changes.fullscreenIn !== 'undefined') {
        //   console.log('111', changes.fullscreenIn.currentValue, this.fullscreenable);
        // }
    }
    get pannelClasses() {
        const classes = ['panel'];
        classes.push(this.collapsed ? 'panel-collapsed' : '');
        classes.push(this.fullscreenIn ? 'panel-fullscreen' : '');
        return classes;
    }
    get pannelContainerClasses() {
        const classes = ['panel-container'];
        if (this.collapsible) {
            // classes.push(this.collapsed ? 'collapse' : 'show');
            classes.push(this.collapsed ? '' : 'show');
        }
        return classes;
    }
    get pannelContentClasses() {
        const classes = ['panel-content'];
        return classes;
    }
    toggleCollapse($event) {
        $event.preventDefault();
        this.collapsed = !this.collapsed;
    }
    toggleFullscreen($event) {
        $event.preventDefault();
        this.fullscreenIn = !this.fullscreenIn;
        Object(_utils_utils_functions__WEBPACK_IMPORTED_MODULE_3__["handleClassCondition"])(this.fullscreenIn, 'panel-fullscreen', document.querySelector('body'));
    }
    closePanel($event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            $event.preventDefault();
            const titleEl = this.el.nativeElement.querySelector('h1')
                || this.el.nativeElement.querySelector('h2')
                || this.el.nativeElement.querySelector('h3');
            const title = titleEl ? titleEl.innerText : '';
            const result = yield this.dialogs.confirm({
                title: `<i class='fal fa-times-circle text-danger mr-2'></i>
      Do you wish to delete panel <span class='fw-500'>&nbsp;'${title}'&nbsp;</span>?`,
                message: `<span><strong>Warning:</strong> This action cannot be undone!</span>`,
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-danger shadow-0'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-default'
                    }
                }
            }).toPromise();
            if (result) {
                this.renderer.addClass(this.el.nativeElement, 'd-none');
            }
        });
    }
    setHeaderClass(headerClass) {
        this.headerClass = headerClass;
    }
};
PanelComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['headerClass',] }] },
    { type: _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_4__["DialogsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PanelComponent.prototype, "collapsible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PanelComponent.prototype, "collapsed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PanelComponent.prototype, "fullscreenable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], PanelComponent.prototype, "fullscreenIn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], PanelComponent.prototype, "clossable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], PanelComponent.prototype, "closed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('panelTitle', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PanelComponent.prototype, "panelTitle", void 0);
PanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'smart-panel',
        template: __webpack_require__(/*! raw-loader!./panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/panels/panel/panel.component.html"),
        animations: [Object(_utils_animations__WEBPACK_IMPORTED_MODULE_2__["makeSlideInOut"])()],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('headerClass')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _dialogs_dialogs_service__WEBPACK_IMPORTED_MODULE_4__["DialogsService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], PanelComponent);

/**
 * spec
 * + it should have multiple content projections
 * + it should have tooltips on feature buttons
 * it should be able to disable all features
 * it should save options to local storage
 *         closed
 * + it should wrap header
 * + it should be closable
 * + it should warn on close
 * + it should be fullscrinable
 * +       toggle class .panel-fullscreen on :host element
 * +       toggle class .panel-fullscreen on body element
 * + it should be collapsable
 * +       animated collapse
 * +       toggle class .panel-collapsed on :host element
 * +       toggle class .collapse .show  on .panel-container element
 * it should be lockable *
 *        toggle class .panel-locked on :host element
 * + it should be able to change colors // styles
 * +       .panel-hdr
 * it should have loading indicator/state
 *         have runLoader()
 * it should be able to run refresh state
 *        toggle class .panel-refresh on :host element
 *        toggle class .enable-loader on .panel-container element
 * + it should be able to accept custom  buttons
 * it should be sortable
 *    toggle class .panel-sortable on :host element
 *   dragging
 *    placeholder .panel-placeholder
 *    drag handle > .panel-hdr > h2
 * it should remeber position
 * it should emit callbacks
 * it should be able to reset
 *    all widgets
 *    all widgets settings
 *    all widgets positions
 *    widget settings
 *    widget position
 * it should be destroyable
 * alert if no id
 * it should add propper roles
 *
 * dependencies
 *    ngx-bootstrap/modal
 *    ngx-bootstrap/dropdown
 *    ngx-bootstrap/tooltip
 *    cdk/drag-ndrop
 */


/***/ }),

/***/ "./src/app/shared/panels/panels.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/panels/panels.module.ts ***!
  \************************************************/
/*! exports provided: PanelsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsModule", function() { return PanelsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _forms_forms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../forms/forms.module */ "./src/app/shared/forms/forms.module.ts");
/* harmony import */ var _custom_tables_custom_tables_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../custom-tables/custom-tables.module */ "./src/app/shared/custom-tables/custom-tables.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../layout/layout.module */ "./src/app/shared/layout/layout.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/shared/panels/panel/panel.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialogs/dialogs.module */ "./src/app/shared/dialogs/dialogs.module.ts");
/* harmony import */ var _crud_panel_crud_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./crud-panel/crud-panel.component */ "./src/app/shared/panels/crud-panel/crud-panel.component.ts");
/* harmony import */ var _crud_panel_crud_panel_form_crud_panel_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crud-panel/crud-panel-form/crud-panel-form.component */ "./src/app/shared/panels/crud-panel/crud-panel-form/crud-panel-form.component.ts");











let PanelsModule = class PanelsModule {
};
PanelsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_panel_panel_component__WEBPACK_IMPORTED_MODULE_6__["PanelComponent"], _crud_panel_crud_panel_component__WEBPACK_IMPORTED_MODULE_9__["CrudPanelComponent"], _crud_panel_crud_panel_form_crud_panel_form_component__WEBPACK_IMPORTED_MODULE_10__["CrudPanelFormComponent"]],
        imports: [
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_8__["DialogsModule"],
            _forms_forms_module__WEBPACK_IMPORTED_MODULE_1__["CustomFormsModule"],
            _custom_tables_custom_tables_module__WEBPACK_IMPORTED_MODULE_2__["CustomTablesModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
        ],
        exports: [_panel_panel_component__WEBPACK_IMPORTED_MODULE_6__["PanelComponent"], _crud_panel_crud_panel_component__WEBPACK_IMPORTED_MODULE_9__["CrudPanelComponent"]],
        entryComponents: [_crud_panel_crud_panel_form_crud_panel_form_component__WEBPACK_IMPORTED_MODULE_10__["CrudPanelFormComponent"]]
    })
], PanelsModule);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/shared/layout/layout.module.ts");
/* harmony import */ var _forms_forms_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/forms.module */ "./src/app/shared/forms/forms.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _custom_tables_custom_tables_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-tables/custom-tables.module */ "./src/app/shared/custom-tables/custom-tables.module.ts");
/* harmony import */ var _panels_panels_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panels/panels.module */ "./src/app/shared/panels/panels.module.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");











const modules = [
    _panels_panels_module__WEBPACK_IMPORTED_MODULE_6__["PanelsModule"],
    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"],
    _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
    _custom_tables_custom_tables_module__WEBPACK_IMPORTED_MODULE_5__["CustomTablesModule"],
    _forms_forms_module__WEBPACK_IMPORTED_MODULE_2__["CustomFormsModule"],
];
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forChild(),
            ...modules,
        ],
        exports: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"], ...modules],
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=default~features-about-about-module~features-article-article-module~features-customer-customer-modul~ebf54026-es2015.js.map