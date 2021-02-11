import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StyleService } from './style.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  clientId = 0;

  public isSwitcherShown = false;

  constructor(private actRoute: ActivatedRoute, private styleService: StyleService) { }

  toggleThemeSwitcher() {
    this.isSwitcherShown = !this.isSwitcherShown;
  }

  ngOnInit() {

    this.actRoute.queryParams.subscribe(params => {
      this.clientId = params['client'];
      if (this.clientId !== undefined)
        this.styleService.setStyle(this.clientId);
    });
  }

}
