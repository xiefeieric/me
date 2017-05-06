import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AboutMeComponent} from "./about-me/about-me.component";
import {BodyComponent} from "./body/body.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {NotesComponent} from "./notes/notes.component";
/**
 * Created by Fei on 06/05/2017.
 */

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: BodyComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'about-me', component: AboutMeComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
