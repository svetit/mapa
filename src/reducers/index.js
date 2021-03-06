import form                from "./form";
import search              from "./search";
import map                 from "./map";
import view                from "./view";
import server              from "./server";
import url                 from "./url";
import user                from "./user";
import timedActions        from "./timedActions";
import iframe              from "./iframe";
import { reducer as notificationsReducer } from 'reapop';
import { combineReducers } from "redux";
import lngReducer          from "../reducers/lngReducer"

module.exports = combineReducers({
  notifications: notificationsReducer(),
  form,
  search,
  map,
  view,
  server,
  url,
  user,
  timedActions,
  iframe,
  lng: lngReducer
});
