import { Component, OnInit } from '@angular/core';
import {EfirOilService} from '../efir-oil.service';
import {EfirOil} from '../efir-oil';

@Component({
  selector: 'app-ethereal-oil-list',
  templateUrl: './ethereal-oil-list.component.html',
  styleUrls: ['./ethereal-oil-list.component.scss']
})
export class EtherealOilListComponent implements OnInit {

  public efirs: EfirOil[];

  constructor(private efir: EfirOilService) {
    this.efirs = this.efir.getOils();
  }

  ngOnInit() {
  }

}
