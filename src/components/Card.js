import React, { useState }from 'react'
import IconCheck from '../images/icon-check.svg'

function Card() {

    const values = [0, 1, 2, 3, 4]
    const prices = [8, 12, 16, 24, 36]
    const pageviews = ["10k", "50k", "100k", "500k", "1M"]

    const [sliderValue, setSliderValue] = useState(2)
    const [isYearlyBilling, setIsYearlyBilling] = useState(false)

    const calculatePrice = (basePrice, isYearlyBilling ) => {
        if(isYearlyBilling) {
            return basePrice * 12 * .75;
        }
        return basePrice;
    }
  return (
    <div>
         <div className='card w-md-50 mx-auto'>
            <div className='card-body p-4'>
                <div className='row mb-3'>
                    <div className='col-md-6 order-sm-1 pt-md-4 text-center text-md-start col-margin' id='pageview-text'>
                        {pageviews[sliderValue]} PAGEVIEWS
                    </div>
                    <div className='col-md-6 order-3 order-md-2 text-center text-md-end col-margin'>
                    <span id="price">${calculatePrice(prices[sliderValue], isYearlyBilling)}.00</span> /{isYearlyBilling ? 'year' : 'month'}
                    </div>
                <div className='w-100 text-center col-12 order-2 order-md-3 col-margin'>
                    <input type="range" name="pageviews" id="pageviews" min={0} max={4} value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))}/>
                </div>
                </div>

                <div className='row billing-row justify-content-center' id="billing-row">
                    <div className='col-4 px-0 text-end'>Monthly billing</div>
                    <div className='col-4 px-2 text-center form-check form-switch'>
                        <input className='form-check-input' type='checkbox' role='switch' id='flexSwitchCheckDefault' checked={isYearlyBilling} onChange={() => setIsYearlyBilling(!isYearlyBilling)}/>
                    </div> 
                    <div className='col-4 px-0'>Yearly billing <span className='badge badge-pill bg-light'>-25%</span></div>
                </div>

                <div className='divider'></div>

                <div className='row'>
                    <div className='col-12 col-md-6 text-center text-md-start col-margin' id="list-text">
                        <div className='mb-2'><span className='mx-2'><img className="check-icon" src={IconCheck} /></span> Unlimited websites</div>
                        <div className='mb-2'><span className='mx-2'><img className="check-icon" src={IconCheck} /></span> 100% data ownership</div>
                        <div className='mb-2'><span className='mx-2'><img className="check-icon" src={IconCheck} /></span> Email reports</div>
                    </div>
                    <div className='col-12 col-md-6 text-center my-md-auto text-md-end start-btn'>
                        <button className='px-5 px-md-4 px-lg-5 py-2 py-md-3'>Start my trial</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Card