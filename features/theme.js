import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  primary: '#00f',
  secondary: '#DB7093',
  complementary: '#f00',
  text: '#f0f0f0',
}

const pallete = {
  light: {
    primary: '#00f',
    secondary: '#DB7093',
    complementary: '#f00',
    text: '#f0f0f0',
  },
  dark: {
    primary: '#00f',
    secondary: '#DB7093',
    complementary: '#f00',
    text: '#f0f0f0',
  },
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: initialStateValue },
  reducers: {
    changeTheme: (state, action) => {
      const theme = action.payload

      switch (theme) {
        case 'light':
          break
        case 'dark':
          break
      }

      state.value = { ...action.payload }
    },
  },
})

export default themeSlice.reducer
