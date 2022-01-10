import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  primary: '#001325',
  secondary: 'palevioletred',
  complementary: '#45b3e7',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: initialStateValue },
  reducers: {
    changeTheme: (state, action) => {
      state.value = { ...action.payload }
    },
  },
})

export default themeSlice.reducer
