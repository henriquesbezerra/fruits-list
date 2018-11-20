import { Component, OnInit } from '@angular/core';

import { Fruit } from './Fruit.class';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {

  frutas: Fruit[];
  total_price: number;

  constructor(private fruitService: FruitService) { }

  ngOnInit() {
    this.getFruits();    
  } 
  
  getFruits(): void{    
    this.fruitService.getFruits().subscribe(frutas => this.frutas = frutas)
  }
}
