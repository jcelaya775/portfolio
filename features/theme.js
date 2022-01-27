import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  primary: '#00f',
  secondary: '#DB7093',
  complementary: '#f00',
  text: '#f0f0f0',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: initialStateValue },
  reducers: {
    changeTheme: (state, action) => {
      const colors = state.value
      switch(colors)
      state.value = { ...action.payload }
    },
  },
})

export default themeSlice.reducer
