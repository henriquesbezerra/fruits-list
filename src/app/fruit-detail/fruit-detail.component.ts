import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Fruit } from '../fruit/Fruit.class';
import { FruitService } from '../services/fruit.service';


@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.scss']
})
export class FruitDetailComponent implements OnInit {

  fruta: Fruit;
  
  constructor(
    private route: ActivatedRoute,
    private fruitService: FruitService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getFruitByName();
  }

  getFruitByName(): void{
    const name = this.route.snapshot.paramMap.get('name');
    this.fruitService.getFruitByName(name).subscribe(fruta => this.fruta = fruta);
  }

  goBack(): void{
    this.location.back();
  }
}
