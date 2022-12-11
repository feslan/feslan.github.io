import { Component } from '@angular/core';
import mixpanel from 'mixpanel-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'feslan';
  constructor() {
    console.log('Welcome to my website -Ferhat Aslan');

    let timexone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    mixpanel.init('875e9ff0a62dc433a8e4a96e88d26069', { debug: true });
    var lang = navigator.language;
    mixpanel.track('guest', {
      browserLanguage: lang,
      timezone: timexone,
      route: window.location,
    });
  }
}
// ng deploy --repo=https://github.com/feslan/feslan.github.io
