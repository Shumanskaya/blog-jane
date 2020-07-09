import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ethereal-oil-short',
  templateUrl: './ethereal-oil-short.component.html',
  styleUrls: ['./ethereal-oil-short.component.scss']
})
export class EtherealOilShortComponent implements OnInit {

  @Input() efirs;

  constructor() { }

  ngOnInit() {
  }

}
