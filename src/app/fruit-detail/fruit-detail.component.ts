import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import { Location } from '@angular/common';

import { Fruit } from '../fruit/Fruit.class';
import { FruitService } from '../services/fruit.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.scss']
})
export class FruitDetailComponent implements OnInit {

  public fruta: Fruit;
  public estoque: number;
  public total: number = 0.00;
  public qtd_selected: number = 0;
  public qtd_cart: number = 0;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fruitService: FruitService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getFruitByName();
    this.estoque = this.fruta.amount;
    
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }


  getFruitByName(): void{
    const name = this.route.snapshot.paramMap.get('name');
    this.fruitService.getFruitByName(name).subscribe(fruta => this.fruta = fruta);           
  }

  goBack(): void{
    this.location.back();
  }
  
  addItem(): void{
    if(this.estoque > 0){
      this.qtd_selected++;
      this.qtd_cart++;
      this.estoque--;      
      this.total = this.calcTotal(this.qtd_selected,this.fruta.price);   
    }    
  }
  removeItem(): void{
    if(this.estoque < this.fruta.amount){
      this.qtd_selected--;
      this.qtd_cart--;
      this.estoque++;   
      this.total = this.calcTotal(this.qtd_selected,this.fruta.price);   
    }
  }
  
  calcTotal(qtd : number, price : number): number{
    return qtd*price;
  }

}
