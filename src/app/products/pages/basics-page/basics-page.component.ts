import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'edgar'
  public nameUpper: string = 'EDGAR'
  public fullName: string = 'EdGaR pErEz'
  public customDate: Date = new Date()


}
