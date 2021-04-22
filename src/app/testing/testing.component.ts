import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { TestingService } from '../services/testing.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.less']
})
export class TestingComponent implements OnInit, AfterViewInit, OnDestroy {

  counter: number = 0;

  constructor(public testerServ: TestingService) { }


  ngAfterViewInit(): void {
    
    this.addSubscription();
  }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
  }

  addSubscription(): void {
    console.info('setting up sub');
    this.testerServ.emitter.subscribe(res => {
      console.log('caught emitter!');
      console.info('counter', this.counter);
    });
  }

  increaseCounter(): void {
    this.counter++;
  }

}
