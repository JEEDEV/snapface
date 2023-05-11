import { NgModule } from "@angular/core";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
/* 
Un module de routing contient un tableau de type  Routes  qui contient les routes de l'application.
Une route est un objet de type : 
{ path: 'myPath', component: MyComponent }  qui spécifie le component à afficher pour chaque route.
*/
const routes: Routes = [
    { path: 'facesnaps', component: FaceSnapListComponent},
    { path: '', component: LandingPageComponent}
];

@NgModule({
imports: [
    RouterModule.forRoot(routes)
],
exports: [
    RouterModule
]
})
export class AppRoutingModule {
    
}