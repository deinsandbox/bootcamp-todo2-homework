import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HighlightDirective } from './highlight.directive';
import { SizeUpDirective } from './size-up/size-up.directive';
import { CreditcardPipe } from './creditcard/creditcard.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HighlightDirective,
    SizeUpDirective,
    CreditcardPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
