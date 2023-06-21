import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {DialogsService} from './dialogs.service';
import {ModalComponent} from './modal/modal.component';

@NgModule({
    declarations: [ConfirmDialogComponent, ModalComponent],
    entryComponents: [ConfirmDialogComponent, ModalComponent],
    imports: [
        CommonModule,
        ModalModule,
    ],
    providers: [DialogsService],
    exports: [ModalComponent],
})
export class DialogsModule {
}
