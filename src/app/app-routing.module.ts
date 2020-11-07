import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'share', component: ShareComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
