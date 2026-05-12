import { LayoutModule } from './layout/layout.module';
import { CustomFormsModule } from './forms/forms.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomTablesModule} from './custom-tables/custom-tables.module';
import {PanelsModule} from './panels/panels.module';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabsModule} from 'ngx-bootstrap/tabs';

const modules = [
    PanelsModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule,
    LayoutModule,
    CustomTablesModule,
    CustomFormsModule,
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ModalModule.forChild(),
        ...modules,
    ],
    exports: [ModalModule, ...modules],
})
export class SharedModule {
}
