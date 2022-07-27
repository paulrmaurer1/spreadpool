// .src/app/app.store.ts
import { InjectionToken } from '@angular/core';
import { devToolsEnhancer } from '@redux-devtools/extension'; //to work with Chrome redux devtools
import {
  createStore,
  Store,
} from 'redux';
import { AppState } from './app.state';
import { UserReducer as reducer } from './core/user.reducer';

export const AppStore = new InjectionToken('App.store');

export function createAppStore(): Store<AppState> {
  return createStore<AppState, any, any, any>(
    reducer,
    devToolsEnhancer()
  );
}

export const appStoreProviders = [
   { provide: AppStore, useFactory: createAppStore }
];