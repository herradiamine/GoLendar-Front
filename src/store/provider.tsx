'use client'

import { Provider } from 'react-redux';
import { Store } from '@/store/index';
import React from "react";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (<Provider store={Store}>{children}</Provider>);
}
