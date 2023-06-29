import { UPDATE_INDEX } from "./actionsTypes.js";

export const updateIndex = (newIndex) => ({
  type: UPDATE_INDEX,
  newIndex,
});
