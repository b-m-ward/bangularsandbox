import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'bsandbox';

  /**
   *
   */
  constructor(public router: Router) {
  }

  public to(link: string): void {
    this.router.navigateByUrl(link);
  }
}
