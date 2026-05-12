import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {CountryService} from './country.service';
import {
  addCountry,
  addCountrySuccess,
  deleteCountry, deleteCountrySuccess,
  loadCountries,
  loadCountriesSuccess,
} from './country.actions';
import {filter, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {allCountryLoaded} from './country.selectors';


@Injectable()
export class CountryEffects {

    loadCountries$ = createEffect(() => this.actions$.pipe(
        ofType(loadCountries),
        withLatestFrom(this.store.select(allCountryLoaded)),
        filter(([_, allLoaded]) => !allLoaded),
        mergeMap(_ => this.service.findAll().pipe(
            map(data => loadCountriesSuccess({data})),
        )),
    ));

    addCountry$ = createEffect(() => this.actions$.pipe(
        ofType(addCountry),
        mergeMap(action => this.service.save(action.data).pipe(
            map(data => addCountrySuccess({data})),
        )),
    ));

    deleteCountry$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCountry),
        mergeMap(({data}) => this.service.delete(data).pipe(
            map(_ => deleteCountrySuccess({id: data.id})),
        )),
    ));

    constructor(private actions$: Actions, private store: Store<any>, private service: CountryService) {
    }

}
