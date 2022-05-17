import React from 'react'
import Navebar from './Navebar'

const ProductEntry = () => {
  return (
    <div>
        <Navebar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" class="form-label">Name</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" class="form-label">Price</label>
            <input type="number" name="" id="" className="form-control"/>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" class="form-label">Description</label>
            <input type="text" className="form-control"/>
        </div>
                </div>
            </div>
        </div>
   </div>
</div>
    </div>
  )
}

export default ProductEntry