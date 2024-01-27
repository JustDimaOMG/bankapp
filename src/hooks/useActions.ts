import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import * as authActions from 'store/authSlice'; 
import { AppDispatch, RootState } from "store/store";
import * as themeActions from 'store/themeSlice'; 
import * as cardsActions from 'store/cardsSlice'; 
import * as goalsActions from 'store/goalsSlice'; 

const rootActions = {
  ...authActions,
  ...themeActions,
  ...cardsActions,
  ...goalsActions
};

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch);
  }, [dispatch]);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;