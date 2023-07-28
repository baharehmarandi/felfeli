import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShoppingCardComponent} from "./component/shopping-card/shopping-card.component";

const routes: Routes = [
  {
    path: "", component: ShoppingCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCardRoutingModule { }
