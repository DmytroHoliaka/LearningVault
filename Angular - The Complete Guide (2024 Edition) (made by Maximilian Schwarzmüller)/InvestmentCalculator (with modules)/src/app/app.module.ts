import {NgModule} from "@angular/core";
import {InvestmentResultComponent} from "./investment-result/investment-result.component";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {BrowserModule} from "@angular/platform-browser";
import {UserInputModule} from "./user-input/user-input.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestmentResultComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, UserInputModule],
})
export class AppModule {
}
