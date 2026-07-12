import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from "./order.component";
import {authGuard} from "../../core/auth/auth.guard";

const routes: Routes = [
  {path:'', component: OrderComponent, canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
