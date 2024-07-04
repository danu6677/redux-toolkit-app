// newsSlice.ts
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {request, ApiResponse} from '../api/api';

//Response Model
interface NewsItem {
  id: number;
  title: string;
  images: {
    square_140: string;
  };
}
//Blue print of the screen state
interface NewsState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  news: NewsItem[];
}

const initialState: NewsState = {
  status: 'idle',
  error: null,
  news: [],
};

export const fetchNewsAsync = createAsyncThunk('news/fetchNews', async () => {
  const response: ApiResponse<NewsItem[]> = await request({
    method: 'GET',
    url: '/items?lineupSlug=news',
    // headers: {
    //    other headers if needed
    // },
  });
  return response.data;
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNewsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchNewsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.news = action.payload;
      })
      .addCase(fetchNewsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message || 'Unknown error';
      });
  },
});

export default newsSlice.reducer;
