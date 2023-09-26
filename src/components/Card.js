import React from 'react'

function Card() {
  return (
    <div>
         <div className='card w-md-50 mx-auto'>
            <div className='card-body p-4'>
                <div className='row mb-3'>
                    <div className='col-md-6 order-sm-1 pt-md-4 text-center text-md-start col-margin' id='pageview-text'>
                        100k PAGEVIEWS
                    </div>
                    <div className='col-md-6 order-3 order-md-2 text-center text-md-end col-margin'>
                    <span id="price">$16.00</span> / month
                    </div>
                <div className='w-100 text-center col-12 order-2 order-md-3 col-margin'>
                    <input type="range" name="pageviews" id="pageviews" />
                </div>
                </div>

                <div className='row billing-row justify-content-center' id="billing-row">
                    <div className='col-4 px-0 text-end'>Monthly billing</div>
                    <div className='col-4 px-2 text-center form-check form-switch'>
                        <input className='form-check-input' type='checkbox' role='switch' id='flexSwitchCheckDefault'/>
                    </div> 
                    <div className='col-4 px-0'>Yearly billing <span className='badge badge-pill bg-light'>-25%</span></div>
                </div>

                <div className='divider'></div>

                <div className='row'>
                    <div className='col-12 col-md-6 text-center text-md-start col-margin'>
                        <div>Unlimited websites</div>
                        <div>100% data ownership</div>
                        <div>Email reports</div>
                    </div>
                    <div className='col-12 col-md-6 text-center text-md-end'>
                        <button>Start my trial</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Card