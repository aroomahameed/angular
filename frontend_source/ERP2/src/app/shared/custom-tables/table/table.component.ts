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
            const rows = Array.isArray(data) ? data : [];
            this.totalItems = rows.length;
            this._items = rows;
            this.__items = rows;
            this.cdr.markForCheck();
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
                return String(name || '').toLowerCase().includes(value);
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
            this.itemsPerPage = Number(val);
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
            this._items = [...this.__items].sort((a, b) => this.getName(a, item.value) < this.getName(b, item.value) ? sort : -1 * sort);
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
            return name.reduce((value, key) => value == null ? '' : value[key], item);
        }

        return item && item[name] != null ? item[name] : '';


    }

    getMoneyValue(item: any, name: any) {
        const value = this.getName(item, name);
        if (value === null || value === undefined || value === '') {
            return '';
        }

        const numericValue = Number(value);
        return Number.isFinite(numericValue) ? numericValue.toLocaleString() : value;
    }

    getImageSrc(item: any, name: any) {
        const image = this.getName(item, name);
        if (typeof image === 'string' && image.trim()) {
            const value = image.trim();
            if (
                value.startsWith('data:image/') ||
                value.startsWith('assets/') ||
                value.startsWith('/') ||
                value.startsWith('http://') ||
                value.startsWith('https://')
            ) {
                return value;
            }
        }

        return 'assets/img/demo/upload.png';
    }

    onImageError(event: Event) {
        const image = event.target as HTMLImageElement;
        if (image && image.src.indexOf('assets/img/demo/upload.png') === -1) {
            image.src = 'assets/img/demo/upload.png';
        }
    }

    trackById(index: number, item: any) {
        return item && item.id ? item.id : index;
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
