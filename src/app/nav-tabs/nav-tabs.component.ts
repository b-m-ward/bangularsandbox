import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { faUser, faCalculator, faCalendar, faAmbulance, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.less']
})
export class NavTabsComponent implements OnInit {

  @ViewChild('nav') navBar: NgbNav;
  public active: number = 1;
  public user: IconDefinition = faUser;
  public calc: IconDefinition = faCalculator;
  public calendar: IconDefinition = faCalendar;

  private maxPage: number = 3;
  constructor() { }

  ngOnInit(): void {
  }

  public switchTab(forwards: boolean): void {
    if(forwards && this.active < this.maxPage) this.active++;
    if(!forwards && this.active > 1) this.active--;
    this.navBar.select(this.active)
  }

}
