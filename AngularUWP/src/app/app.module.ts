import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './components/app/app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroService }          from './services/hero.service';
import { AppRoutingModule }     from './modules/app-routing.module';
import { SamplePipe } from './pipes/sample/sample.pipe';
import { SampleDirective } from './directives/sample/sample.directive';
import { SampleComponent } from './components/sample/sample.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    SamplePipe,
    SampleDirective,
    SampleComponent,
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
