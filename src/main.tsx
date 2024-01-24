import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from 'store/store';
import Router from 'routes/Router';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
    <QueryClientProvider client={queryClient}>
      <Provider store = {store}>
        <Router/>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
