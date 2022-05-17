import React from 'react'

const SearchProduct = () => {
  return (
    <div><div classNameName="container">
    <div classNameName="row">
        <div classNameName="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div classNameName="row g-3">
                <div classNameName="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div classNameName="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">Product name</label><br/>
            <input type="text" classNameName="form-control"/>
        </div>
        <div classNameName="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <button className="btn-success">SEARCH</button>
        </div>
        
                </div>
            </div>
        </div>
   </div>
</div></div>
  )
}

export default SearchProduct