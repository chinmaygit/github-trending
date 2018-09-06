import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

export const makeSelectLanguage = () =>
  createSelector(selectHome, homeState => homeState.get('language'));

export const makeSelectRepositories = () =>
  createSelector(selectHome, homeState => homeState.get('repositories'));

export const makeSelectError = () =>
  createSelector(selectHome, homeState => homeState.get('error'));

export const makeSelectLoading = () =>
  createSelector(selectHome, homeState => homeState.get('loading'));
