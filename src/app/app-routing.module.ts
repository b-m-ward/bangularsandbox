import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { TestingComponent } from './testing/testing.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestingComponent},
  { path: 'nav', component: NavTabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
