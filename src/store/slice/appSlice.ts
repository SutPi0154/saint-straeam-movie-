import { AppSlice, GetAppDataOptions } from "@/types/app";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setGenres } from "./genreSlice";
import { setMovies } from "./movieSlice";
const initialState: AppSlice = {
  init: false,
  isLoading: false,
  isError: null,
};
export const fetchAppData = createAsyncThunk(
  "app/appSlice",
  async (options: GetAppDataOptions, thunkApi) => {
    const { onSuccess, onError, role } = options;
    console.log(role, "role form redux");
    try {
      const appDataUrl = role
        ? `${config.adminApiUrl}/app?role=${role}`
        : `${config.costumerApiUrl}/app`;
      const response = await fetch(appDataUrl);
      const appData = await response.json();
      //   const {
      //     locations,
      //     menuCategories,
      //     menus,
      //     menuCategoryMenus,
      //     addonCategories,
      //     menuAddonCategories,
      //     addons,
      //     tables,
      //     orders,
      //     disabledLocationMenus,
      //     disabledLocationMenuCategories,
      //     company,
      //     user,
      //   } = appData;
      //   if (tableId) {
      //     thunkApi.dispatch(setInit(true));
      //     thunkApi.dispatch(setMenuCategories(menuCategories));
      //     thunkApi.dispatch(setMenus(menus));
      //     thunkApi.dispatch(setMenuCategoryMenus(menuCategoryMenus));
      //     thunkApi.dispatch(setAddons(addons));
      //     thunkApi.dispatch(setAddonCategories(addonCategories));
      //     thunkApi.dispatch(setTables(tables));
      //     thunkApi.dispatch(setDisableLocationMenus(disabledLocationMenus));
      //     thunkApi.dispatch(
      //       setDisableLocationMenuCategories(disabledLocationMenuCategories)
      //     );
      //     thunkApi.dispatch(setMenuAddonCategory(menuAddonCategories));
      //     thunkApi.dispatch(setOrders(orders));
      //     thunkApi.dispatch(setCompany(company));
      //     thunkApi.dispatch(setUser(user));
      //     onSuccess && onSuccess();
      //   } else {

      //     thunkApi.dispatch(setLocations(locations));
      //     if (!localStorage.getItem("selectedLocationId")) {
      //       localStorage.setItem("selectedLocationId", locations[0].id);
      //     }
      //     thunkApi.dispatch(setInit(true));
      //     thunkApi.dispatch(setLocations(locations));
      //     thunkApi.dispatch(setMenuCategories(menuCategories));
      //     thunkApi.dispatch(setMenus(menus));
      //     thunkApi.dispatch(setMenuCategoryMenus(menuCategoryMenus));
      //     thunkApi.dispatch(setAddons(addons));
      //     thunkApi.dispatch(setAddonCategories(addonCategories));
      //     thunkApi.dispatch(setTables(tables));
      //     thunkApi.dispatch(setDisableLocationMenus(disabledLocationMenus));
      //     thunkApi.dispatch(
      //       setDisableLocationMenuCategories(disabledLocationMenuCategories)
      //     );
      //     thunkApi.dispatch(setMenuAddonCategory(menuAddonCategories));
      //     thunkApi.dispatch(setOrders(orders));
      //     thunkApi.dispatch(setCompany(company));
      //     thunkApi.dispatch(setUser(user));
      //     onSuccess && onSuccess();
      //   }
      const { movies, genres } = appData;
      onSuccess && onSuccess();
      console.log(movies, genres);
      if (role) {
        thunkApi.dispatch(setInit(true));
        thunkApi.dispatch(setMovies(movies));
        thunkApi.dispatch(setGenres(genres));
      } else {
        // console.log("user");
      }
    } catch (err) {
      onError && onError();
      console.log(err);
    }
  }
);

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setInit: (state, { payload }) => {
      state.init = payload;
    },
  },
});
export const { setInit } = appSlice.actions;
export default appSlice.reducer;
