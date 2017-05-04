import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HeaderComponent} from "./header/header.component";
import {BodyComponent} from "./body/body.component";
import {FooterComponent} from "./footer/footer.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import "hammerjs";
import {MaterialModule, MdButton} from "@angular/material";
import {AngularFireModule} from "angularfire2";

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCxkhxhrQpk4n_bKBy6bgIAN3QleK22zo8",
  authDomain: "feixie-ce205.firebaseapp.com",
  databaseURL: "https://feixie-ce205.firebaseio.com",
  projectId: "feixie-ce205",
  storageBucket: "feixie-ce205.appspot.com",
  messagingSenderId: "98705409092"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MaterialModule]
})
export class AppModule {
}
