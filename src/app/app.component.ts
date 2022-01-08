import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular';

  navClick() {
    // console.log('test->',document.getElementById('sideNav').style.visibility);
    if(document.getElementById('sideNav').style.visibility=='visible') {
      console.log('yes');
    }
  }

}
