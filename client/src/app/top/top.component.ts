import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  tabs: any = [
    {name: 'Add Content', url: '/corporate/diy/url'},
    {name: 'Select Audience', url: '/corporate/diy/details'},
    {name: 'Customize Audience', url: '/corporate/diy/quota'},
    {name: 'Configure Pre-Survey', url: '/corporate/diy/addpresurvey'},
    {name: 'Configure Post-Survey', url: '/corporate/diy/addpostsurvey'},
    {name: 'Panel', url: '/corporate/diy/panel'},
    {name: 'Review', url: '/corporate/diy/confirm'},
  ];
  index: any = 0;
  cmp_id: any;
  pageStage: any;
  top: any = true;
  interval: any;
  constructor(private router: Router, private dialog: MatDialog) { }
  pageroute(e) {
    this.router.navigate([this.tabs[e.index].url]).then(() => {}).catch(() => {});
  }
  routeTab (r) {
    this.router.navigate([r]);
  }
  ngOnInit() {
   /* this.interval = setInterval(() => {
      this._as.userGet('checkActiveSession')
        .subscribe((suc) => {});
    }, 50000);*/
    this.pageStage = Number(localStorage.getItem('page_Stage'));
    this.cmp_id = localStorage.getItem('cmp_id');
    this.top = this.router.url.search('dashboard') === -1;
    this.router.events.subscribe( url => {
      this.pageStage = Number(localStorage.getItem('page_Stage'));
      this.cmp_id = localStorage.getItem('cmp_id');
      this.top = this.router.url.search('dashboard') === -1;
    });
    for (const key in this.tabs) {
      if (this.tabs.hasOwnProperty(key)) {
        if (this.router.url === this.tabs[key].url) {
          this.index = key;
        }
      }
    }
    this.router.events.subscribe(event => {
     /* if (event instanceof NavigationEnd) {
        for (const key in this.tabs) {
          if (this.tabs.hasOwnProperty(key)) {
            if (event.url === this.tabs[key].url) {
              this.index = key;
              /!*if (this.tabs[key].url === '/corporate/diy/url') {
                // this.cmp_id = undefined;
              } else {
                this.cmp_id = localStorage.getItem('cmp_id');
              }*!/
            }
          }
        }
      }*/
    });
  }
  LogOut () {
    /*this._as.userPost( {sid: localStorage.getItem('sid')}, 'logout').subscribe((success) => {
      localStorage.clear();
      this.router.navigate(['corporate/login']);
    });*/
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
