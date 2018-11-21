import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
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

  constructor(
    private fruitService: FruitService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getFruits(); 
    
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  } 

  
  getFruits(): void{    
    this.fruitService.getFruits().subscribe(frutas => this.frutas = frutas)   
  }
}
