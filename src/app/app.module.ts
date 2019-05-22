import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgFlashMessagesModule } from 'ng-flash-messages';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgFlashMessagesModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
