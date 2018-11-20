import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FruitsBannerComponent } from './fruits-banner/fruits-banner.component';
import { FruitsFooterComponent } from './fruits-footer/fruits-footer.component';
import { DeliveryBannerComponent } from './delivery-banner/delivery-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    FruitDetailComponent,
    FruitsBannerComponent,
    FruitsFooterComponent,
    DeliveryBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
