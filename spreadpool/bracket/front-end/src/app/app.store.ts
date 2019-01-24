// .src/app/app.store.ts
import { InjectionToken } from '@angular/core';

import {
  createStore,
  Store,
  compose,
  StoreEnhancer
} from 'redux';
import { AppState } from './app.state';
import { UserReducer as reducer } from './core/user.reducer';

export const AppStore = new InjectionToken('App.store');

const devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
  return createStore<AppState, any, any, any>(
    reducer,
    compose(devtools)
  );
}

export const appStoreProviders = [
   { provide: AppStore, useFactory: createAppStore }
];