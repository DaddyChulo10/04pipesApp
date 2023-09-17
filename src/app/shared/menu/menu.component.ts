import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  public MenuItems: MenuItem[] | undefined;


  ngOnInit() {
    this.MenuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-descktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi  pi-align-left',
            routerLink: 'basic/basic',
          },
          {
            label: 'Números',
            icon: 'pi  pi-dollar',
            routerLink: 'basic/numbers',
          },
          {
            label: 'No comunes',
            icon: 'pi  pi-globe',
            routerLink: 'basic/uncommon',
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-spin pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-spin pi-cog',
            routerLink: 'basic/custom'
          }
        ]
      }
    ];
  }


}
