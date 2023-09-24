import React from 'react'

function Card() {
  return (
    <div>
         <div className='card w-md-50 mx-auto'>
            <div className='card-body p-2'>
                <div className='row '>
                    <div className='col-md-6 order-sm-1 text-center text-md-start'>
                        100k PAGEVIEWS
                    </div>
                    <div className='col-md-6 order-3 order-md-2 text-center text-md-end'>
                        $16.00 <span>/month</span>
                    </div>
                <div className='w-100 text-center col-12 order-2 order-md-3'>
                    <input type="range" name="pageviews" id="pageviews" />
                </div>
                </div>

                <div className='row billing-row'>
                    <div className='col-4'>Monthly billing</div>
                    <div className='col-4'></div>
                    <div className='col-4'>Yearly billing</div>
                </div>

                <div className='divider'></div>

                <div className='row'>
                    <div className='col-12 col-md-6 text-center text-md-start'>
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