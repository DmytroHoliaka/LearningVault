import {NgModule} from "@angular/core";
import {CardComponent} from "./card/card.component";
import {AppModule} from "../app.module";

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class SharedModule{
}
