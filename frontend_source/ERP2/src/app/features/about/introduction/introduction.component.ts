import { RowData } from './../../../shared/forms/form/form.component';
import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {APP_CONFIG} from 'src/app/app.config';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Account, loadAccounts, selectAllAccounts, selectAllExceptCashInHand} from '../../store/finance/account';
import {Store} from '@ngrx/store';

@Component({
    selector: 'smart-introduction',
    templateUrl: './introduction.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionComponent implements OnInit {

    accounts: Observable<Account[]>;
    app = APP_CONFIG.app;
    model = '';
    data: RowData[] = [];

    constructor(private store: Store<any>) {
    }

    ngOnInit() {
        this.store.dispatch(loadAccounts());
        this.accounts = this.store.select(selectAllAccounts);
        this.build();
    }

    private build() {
        this.data = [
            {
                row: [
                    {label: 'Name', name: 'name'},
                    {label: 'sdfsdf', name: 'namedd'},
                    {label: 'Name3', name: 'name3', disable: true, validator: Validators.required},
                    {label: 'Name4', name: 'name4', validator: Validators.required},
                ],
            },
            {
                row: [
                    {label: 'A Suitable name', name: 'name5', validator: Validators.required},
                    {label: 'Name6', type: 'date', name: 'name6', validator: Validators.required},
                    {label: 'Name6', name: 'name6', items: this.accounts},
                    {label: 'Name6sfasdf', name: 'name6asdf', type: 'check'},
                ],
            },
        ];
    }

}
