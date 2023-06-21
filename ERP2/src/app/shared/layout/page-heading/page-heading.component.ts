import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-page-heading',
  templateUrl: './page-heading.component.html',
  styles: []
})
export class PageHeadingComponent implements OnInit {

  @Input() icon = 'fal fa-info-circle';
  @Input() title = 'Title of Page';
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
