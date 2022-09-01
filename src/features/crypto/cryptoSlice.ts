import { fetchCrypto } from './cryptoAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CryptoState {
  currentSort: string
  list: Crypto[]
  searchResult: Crypto[]
  modal: Crypto
  status: 'idle' | 'loading' | 'failed';
}
export interface Crypto {
  id: string
  image: string
  name: string
  symbol: string
  market_cap: string
  current_price: number
  market_cap_rank: number
  price_change_percentage_24h: number
}


const initialState: CryptoState = {
  currentSort: '',
  list: [],
  modal: {} as Crypto,
  searchResult: [],
  status: 'idle',
};

export const getData = createAsyncThunk(
  'crypto/fetchCrypto',
  async () => {
    const response = await fetchCrypto();
    const result = await response.json()
    return result
  }
);

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    filter: (state, action) => {
      state.searchResult = state.list.filter((item) => item.name.toLowerCase().trim().includes(action.payload.toLowerCase().trim())) || state.list
    },
    sort: (state, action) => {
      switch(action.payload) {
        case '#':
          if (state.currentSort !== action.payload) {
            state.currentSort = action.payload
            state.searchResult = state.searchResult.sort((a, b) => b.market_cap_rank - a.market_cap_rank)
          }
          else {
            state.currentSort = ''
            state.searchResult = state.searchResult.sort((a, b) => a.market_cap_rank - b.market_cap_rank)
          }
          break
        case 'Name':
          if (state.currentSort !== action.payload) {
            state.currentSort = action.payload
            state.searchResult = state.searchResult.sort((a, b) => b.name.localeCompare(a.name))
          }
          else {
            state.currentSort = ''
            state.searchResult = state.searchResult.sort((a, b) => a.name.localeCompare(b.name))
          }
          break
        case 'Price':
          if (state.currentSort !== action.payload) {
            state.currentSort = action.payload
            state.searchResult = state.searchResult.sort((a, b) => b.current_price - a.current_price)
          }
          else {
            state.currentSort = ''
            state.searchResult = state.searchResult.sort((a, b) => a.current_price - b.current_price)
          }
          break
        case '24h %':
          if (state.currentSort !== action.payload) {
            state.currentSort = action.payload
            state.searchResult = state.searchResult.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
          }
          else {
            state.currentSort = ''
            state.searchResult = state.searchResult.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
          }
          break
        case 'Market Cap':
          if (state.currentSort !== action.payload) {
            state.currentSort = action.payload
            state.searchResult = state.searchResult.sort((a, b) => b.market_cap_rank - a.market_cap_rank)
          }
          else {
            state.currentSort = ''
            state.searchResult = state.searchResult.sort((a, b) => a.market_cap_rank - b.market_cap_rank)
          }
      }
    },
    openModal: (state, action) => {
      state.modal = {...state.modal, ...state.list.find(item => item.id === action.payload)}
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list = action.payload
        state.searchResult = action.payload
      })
      .addCase(getData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { filter, sort, openModal } = cryptoSlice.actions;

export const selectList = (state: RootState) => state.crypto.list;
export const selectSearchResult = (state: RootState) => state.crypto.searchResult;
export const selectSort = (state: RootState) => state.crypto.currentSort;
export const selectModal = (state: RootState) => state.crypto.modal;

export default cryptoSlice.reducer;