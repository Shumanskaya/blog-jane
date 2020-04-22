import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fixed-short',
  templateUrl: './fixed-short.component.html',
  styleUrls: ['./fixed-short.component.scss']
})
export class FixedShortComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Input() list;

  public isShort = true;

  constructor() { }

  toggleList() {
    this.isShort = !this.isShort;
  }

  ngOnInit() {
  }

}
