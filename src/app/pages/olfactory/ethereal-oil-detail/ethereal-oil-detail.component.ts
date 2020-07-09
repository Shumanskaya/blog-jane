import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EfirOilService} from '../efir-oil.service';

@Component({
  selector: 'app-ethereal-oil-detail',
  templateUrl: './ethereal-oil-detail.component.html',
  styleUrls: ['./ethereal-oil-detail.component.scss']
})
export class EtherealOilDetailComponent implements OnInit {

  public path: string;
  public oil;
  public content;

  constructor(private route: ActivatedRoute, private efir: EfirOilService) {
    this.path = route.snapshot.params.path;
    this.oil = efir.getTypeOil(this.path);
  }

  getContentArray() {
    this.oil.forEach(value => {
      this.content = value.content;
    });
  }

  ngOnInit() {
    this.getContentArray();
  }

}
