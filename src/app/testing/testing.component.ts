import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TestingService } from '../services/testing.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.less']
})
export class TestingComponent implements OnInit, AfterViewInit, OnDestroy {

  counter: number = 0;
  favoriteColorReactive: FormControl = new FormControl('');
  favoriteGenreReactive: FormControl = new FormControl('');

  sub: Subscription;

  constructor(public testerServ: TestingService, public formBuilder: FormBuilder) { }


  ngAfterViewInit(): void {
    
    this.addSubscription();
  }
  ngOnDestroy(): void {
    this.testerServ.emitter.observers.forEach((obs) => {
      obs.complete();
      console.log(obs.closed);
      console.log('remaining observers', this.testerServ.emitter.observers.length-1);
    });
  }

  ngOnInit(): void {
  }

  addSubscription(): void {
    console.info('setting up sub');
    this.sub = this.testerServ.emitter.subscribe(res => {
      
      console.info('counter', this.counter);
      console.log('fav color: ', this.favoriteColorReactive.value);
      console.log('fav genre: ', this.favoriteGenreReactive.value);
    });
  }

  increaseCounter(): void {
    this.counter++;
  }

}
