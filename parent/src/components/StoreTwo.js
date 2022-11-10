import React from 'react'
import SafeComponent from './SafeComponent';
const RestAPIStoreTwo = React.lazy(
    () => import('storetwo/storeTwo')
  );
  

const StoreTwo = () => {
  return (
    <>
        <SafeComponent name="Store Two">
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <RestAPIStoreTwo />
          </React.Suspense>
        </SafeComponent>
    </>
  )
}

export default StoreTwo