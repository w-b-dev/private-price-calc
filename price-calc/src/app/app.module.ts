import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './Shared/authentication/authentication.component';

/**
 * A lazy-loaded routed feature module should not be imported by any module.
 * Doing so would trigger an eager load, defeating the purpose of lazy loading.
 * That means you won’t see them mentioned among the AppModule imports.
 * An eager loaded routed feature module must be imported by another module so that the compiler learns about its components.
 * Routed feature modules rarely have providers for reasons explained in Lazy Loading Feature Modules.
 * When they do, the lifetime of the provided services should be the same as the lifetime of the module.
 * Don't provide application-wide singleton services in a routed feature module or in a module that the routed module imports.
 * **/

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
