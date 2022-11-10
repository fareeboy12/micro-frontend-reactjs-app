import React from 'react'
import SafeComponent from './SafeComponent';
const RestAPIStoreOne = React.lazy(
    () => import('storeone/storeOne')
  );
  

const StoreOne = () => {
  return (
    <>
        <SafeComponent name="Store One">
            <React.Suspense fallback={<h1>Loading...</h1>}>
              <RestAPIStoreOne />
            </React.Suspense>
        </SafeComponent>
    </>
  )
}

export default StoreOne