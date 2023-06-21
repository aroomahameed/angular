import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'smart-modal',
  templateUrl: './modal.component.html',
  styles: [],
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;

  constructor(private modalRef: BsModalRef) {}

  ngOnInit() {}
}
