import {ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';

@Component({
    selector: 'smart-table',
    templateUrl: './table.component.html',
    styles: [],
})
export class TableComponent implements OnInit, OnDestroy {

    @Input() items: Observable<any>;
    @Input() columns: TableData[];
    @Input() editable = false;
    @Input() headerClasses = 'bg-primary';
    @Input() tableClasses = 'table-sm';
    @Input() deletable = false;
    @Input() selectable = false;
    @Input() createNext = false;
    @Input() View = false;
    @Input() createNextToolTip = '';
    @Input() ViewToolTip = '';
    @Input() currentItemAction = '';
    @Output() deleteEvt = new EventEmitter<any>();
    @Output() clickEvt = new EventEmitter<any>();
    @Output() searchEvt = new EventEmitter<any>();
    @Output() editEvt = new EventEmitter<any>();
    @Output() selectChange = new EventEmitter<any>();
    @Output() deleteMany = new EventEmitter<any>();
    @Output() createNextEvt = new EventEmitter<any>();
    @Output() viewEvent = new EventEmitter<any>();

    selectedItems: any[] = [];
    private sub: Subscription = new Subscription();

    // tslint:disable-next-line:variable-name
    _items = [];
    // tslint:disable-next-line:variable-name
    __items = [];
    itemsPerPage = 10;
    startIndex = 0;
    endIndex = 10;
    currentPage = 1;
    totalItems = 0;
    numPages = 0;

    constructor(private cdr: ChangeDetectorRef, private store: Store<any>) {
    }

    ngOnInit() {
        this.sub = this.items.subscribe(data => {
            this.totalItems = data.length;
            this._items = data;
            this.__items = data;
            this.cdr.detectChanges();
        });


    }


    showActions(): boolean {
        return this.editable || this.deletable || this.createNext || this.View;
    }

    onDelete(item: any) {
        this.deleteEvt.emit(item);
    }


    onEdit(item: any) {
        if(this.currentItemAction !== ''){
            const action = createAction(
                this.currentItemAction,
                props<{data: any}>()
            );
            
            this.store.dispatch(action({data: item}))
        }

       
        
        this.editEvt.emit(item);
    }

    onClick(item: any) {
        this.clickEvt.emit(item);
    }

    pageChanged(event) {
        this.startIndex = (event.page - 1) * this.itemsPerPage;
        this.endIndex = this.startIndex + this.itemsPerPage;
    }

    onSearch(event: KeyboardEvent) {
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

    onItemCountChange(event: Event) {
        // @ts-ignore
        const val = event.target.value;
        if (val === '-1') {
            this.itemsPerPage = this.totalItems;
        } else {
            this.itemsPerPage = val;
        }
        this.currentPage = 1;
        this.startIndex = 0;
        this.endIndex = this.startIndex + this.itemsPerPage;
        this.cdr.detectChanges();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    onSort(item: any) {
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

    onItemSelect(item: any) {

        const index = this.selectedItems.find(i => i.id === item.id);
        if (index) {
            this.selectedItems = this.selectedItems.filter(i => i.id !== item.id);
        } else {
            this.selectedItems.push(item);
        }

        this.selectChange.emit(this.selectedItems);

    }

    getName(item: any, name: any) {
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

    onSelectAll(event, items: any[]) {
        if (event.target.checked) {
            this.selectedItems = items;
        } else {
            this.selectedItems = [];
        }

        this.selectChange.emit(this.selectedItems);
    }

    isItemSelected(item: any): boolean {
        return this.selectedItems.find(i => i === item) !== undefined;
    }

    onDeleteMany() {
        this.deleteMany.emit(this.selectedItems);
        this.selectedItems = [];
    }

    onCreateNext(item){
        this.createNextEvt.emit(item)
    }
    onView(item){
        this.viewEvent.emit(item)
    }
}

export interface TableData {
    title: string;
    value: any;
    bool?: boolean;
    boolText?: { yes: string, no: string };
    date?: boolean;
    money?: boolean;
    dateFormat?: string;
    sort?: string;
    width?: number;
    sortable?: boolean;
    align?: Align;
    clickable?: boolean;
    image?: boolean;
}

export enum Align {
    LEFT = 'left', CENTER = 'center', RIGHT = 'right'
}

