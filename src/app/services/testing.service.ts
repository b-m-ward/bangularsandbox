import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  public emitter: Subject<any> = new Subject();


  constructor() { }


  public emit(): void {
    this.emitter.next('CALLING NEXT');
  }
}
