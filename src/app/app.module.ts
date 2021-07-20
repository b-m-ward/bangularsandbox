import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestingService } from './services/testing.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { NavDynamicComponent } from './nav-dynamic/nav-dynamic.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    HomeComponent,
    NavTabsComponent,
    NavDynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [TestingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
