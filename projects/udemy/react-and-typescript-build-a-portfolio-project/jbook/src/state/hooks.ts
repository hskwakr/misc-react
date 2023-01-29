import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux/es/types';
import { useState } from 'react';
import { AppDispatch, RootState } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useState;
