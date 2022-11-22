import React from 'react'
import SafeComponent from './SafeComponent';
const RestAPIAddProduct = React.lazy(
    () => import('addproduct/addProduct')
  );
  

const AddProduct = () => {
  return (
    <>
        <SafeComponent name="Store One">
            <React.Suspense fallback={<h1>Loading...</h1>}>
              <RestAPIAddProduct />
            </React.Suspense>
        </SafeComponent>
    </>
  )
}

export default AddProduct