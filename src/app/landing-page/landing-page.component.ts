import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
/* 
Injectez le Router dans vos components et utilisez sa méthode  navigateByUrl()  pour de la navigation programmatique.
*/
export class LandingPageComponent {

  constructor(private router: Router){}

 onContinue():void{
  this.router.navigateByUrl('facesnaps');
 }

}
