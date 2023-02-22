import React from 'react'

function Campaigns() {
  return (
    <div>
      <div className='mt-3'>
          <h3 className='mt-3'>Kampanyalar</h3>
          <div className="campaigns-container container flex justify-between items-center rounded-lg mx-auto bg-primary-brand-color">
            <div className='text-sm font-semibold pl-3'>
              <h2>Getir'i indirin!</h2>
              <div>İstediğiniz ürünler dakikalar içinde kapınıza getirelim.</div>
              <div className='button flex justify-between'>
                <button className='btn2'>1</button>
                <button className='btn2'>2</button>
                <button className='btn2'>3</button>
              </div>
            </div>
            <img className='' src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="tel" />
          </div>
        </div>
    </div>
  )
}

export default Campaigns