import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Books',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Member Profile',  icon:'pe-7s-user', class: '' },
    { path: '/table', title: 'Member Plan',  icon:'pe-7s-note2', class: '' },
    { path: '/typography', title: 'Issued Books',  icon:'pe-7s-news-paper', class: '' },
    { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    { path: '/maps', title: 'Review',  icon:'pe-7s-map-marker', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    // { path: '/register', title: 'Sign up',  icon:'pe-7s-bell', class: '' },
    // { path: '/login', title: 'Sign in',  icon:'pe-7s-bell', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
