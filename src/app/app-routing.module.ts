import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'test', component: TestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
