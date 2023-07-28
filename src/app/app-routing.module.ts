import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./pages/sign-in/sign-in.component";

const routes: Routes = [
  {path:"sign-in", pathMatch:"full", component: SignInComponent},
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path: "shopping-card",
    loadChildren: () => import("./shopping-card/shopping-card.module").then(m => m.ShoppingCardModule)
  },
  {
    path: "",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
