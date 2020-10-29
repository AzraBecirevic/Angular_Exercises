import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
For Two-Way-Binding to work, we need to enable the ngModel  directive. This is done by adding the FormsModule
to the imports[]  array in the AppModule.

We then also need to add the import from @angular/forms  in the app.module.ts file:
import { FormsModule } from '@angular/forms'; 
*/