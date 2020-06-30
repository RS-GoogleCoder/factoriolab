import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from 'src/environments/environment';
import { DatasetState, datasetReducer } from './dataset';
import { ItemsState, itemsReducer } from './items';
import { ProductsState, productsReducer } from './products';
import { RecipesState, recipesReducer } from './recipes';
import { SettingsState, settingsReducer } from './settings';

export interface State {
  datasetState: DatasetState;
  productsState: ProductsState;
  itemState: ItemsState;
  recipeState: RecipesState;
  settingsState: SettingsState;
}

export const reducers: ActionReducerMap<State> = {
  datasetState: datasetReducer,
  productsState: productsReducer,
  itemState: itemsReducer,
  recipeState: recipesReducer,
  settingsState: settingsReducer,
};

/* No need to test without storeFreeze, ignore that branch here. */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : /* istanbul ignore next */
    [];
