import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';
import { AuthenticationService } from './Core/authentication.service';
import { HttpClientModule } from '@angular/common/http';

/**
 * NgModules are containers for a cohesive block of code dedicated to an application domain,
 * a workflow, or a closely related set of capabilities.**/

/**
 * A lazy-loaded routed feature module should not be imported by any module.
 * Doing so would trigger an eager load, defeating the purpose of lazy loading.
 * That means you won’t see them mentioned among the AppModule imports.
 * An eager loaded routed feature module must be imported by another module so that the compiler learns about its
 * components. Routed feature modules rarely have providers for reasons explained in Lazy Loading Feature Modules. When
 * they do, the lifetime of the provided services should be the same as the lifetime of the module. Don't provide
 * application-wide singleton services in a routed feature module or in a module that the routed module imports.
 * **/

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [ AuthenticationService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
