import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {StoreModule, Store, INITIAL_STATE, combineReducers} from '@ngrx/store';

import { AppComponent } from './app.component';
import {UserRehydrateService} from 'app/user-rehydrate.service';
import {initialStoreFactory, reducers} from 'app/store';

export function getReducers() {
  return combineReducers(reducers);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore(getReducers())
  ],
  providers: [
    UserRehydrateService,
    {provide: INITIAL_STATE, deps: [UserRehydrateService], useFactory: initialStoreFactory},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
