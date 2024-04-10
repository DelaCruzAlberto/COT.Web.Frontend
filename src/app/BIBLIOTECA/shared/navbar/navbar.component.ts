import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from './models/MenuItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isActive: boolean = false;
  openSubmenu: boolean = false;
  @Input() sidebarPosition?: string;
  @Input() navbarPosition?: string;
  @Input() itemsMenu?: MenuItem[];

  constructor(private router: Router) {

  }

  ngOnInit(): void { }

  toggleActive() {
    this.isActive = !this.isActive;
    this.openSubmenu = true;
  }

  toggleSubmenu(item: MenuItem): void {
    item.isOpen = !item.isOpen;
  }

  isSubmenuOpen(item: MenuItem): boolean {
    return item.isOpen || false;
  }

  handleClick(href: any) {
    if (typeof href === 'function') {
      href();
    } else if (typeof href === 'string') {
      this.router.navigate(["main/" + href])
    }
  }
}
