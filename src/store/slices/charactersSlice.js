import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const initialState = {
  characters: data,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    deleteCharacter: (state, action) => {
      state.characters = state.characters.filter((character) => {
        if (character.data.ID === action.payload) return false;

        const modifiedCharacter = { ...character };

        if (character.children?.has_nemesis?.records?.length > 0) {
          modifiedCharacter.children.has_nemesis.records =
            character.children.has_nemesis.records.filter((nemesis) => {
              if (nemesis.data.ID === action.payload) return false;

              const modifiedNemesis = { ...nemesis };

              if (nemesis.children?.has_secrete?.records?.length > 0) {
                modifiedNemesis.children.has_secrete.records =
                  nemesis.children.has_secrete.records.filter(
                    (secrete) => secrete.data.ID !== action.payload
                  );
              }
              return modifiedNemesis;
            });
        }
        return modifiedCharacter;
      });
    },
  },
});

export const { deleteCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;
