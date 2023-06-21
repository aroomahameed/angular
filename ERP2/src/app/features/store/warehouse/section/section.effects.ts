import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {SectionService} from './section.service';
import {
  addSection,
  addSectionSuccess,
  deleteSection, deleteSectionSuccess,
  loadSections,
  loadSectionsSuccess,
} from './section.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allSectionLoaded} from './section.selectors';


@Injectable()
export class SectionEffects {

    loadSections$ = createEffect(() => this.actions$.pipe(
        ofType(loadSections),
        withLatestFrom(this.store.select(allSectionLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadSectionsSuccess({data})),
        )),
    ));

    addSection$ = createEffect(() => this.actions$.pipe(
        ofType(addSection),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addSectionSuccess({data})),
        )),
    ));

    deleteSection$ = createEffect(() => this.actions$.pipe(
        ofType(deleteSection),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteSectionSuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: SectionService) {
    }

}
