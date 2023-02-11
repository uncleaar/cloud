import { Store, StoreContext } from '@context/store';
import React from 'react';

export const useStore = () => {
  const { setStore, ...storeContext } = React.useContext(StoreContext);

  return {
    setStore: (data: Partial<Store>) => setStore({ ...storeContext.store, ...data }),
    ...storeContext.store
  };
};
