// .src/app/app.store.ts
import { InjectionToken } from '@angular/core';
import {
  Store,
} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { AppState } from './app.state';
import { UserReducer as reducer } from './core/user.reducer';

export const AppStore = new InjectionToken('App.store');

export function createAppStore(): Store<AppState> {
  return configureStore<AppState, any, any, any>({
    reducer,
  });
}

export const appStoreProviders = [
   { provide: AppStore, useFactory: createAppStore }
];