import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProgressComponent } from './progress.component';
import { ToolbarComponent } from './toolbar.component';
import { TimedisplayPipe } from './timedisplay.pipe';
import { OptionsComponent } from './options.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    ToolbarComponent,
    TimedisplayPipe,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
