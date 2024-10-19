import React from 'react'
import SectionTitle from '../../component/SectionTitle'

const Contact = () => {

  const user = {
    name: " Raees Ahmed",
    age: null,
    gender: " Male",
    email: " raeesasif007@gmail.com",
    mobile: " 09090909090",
    country: " Pakistan",

  }

  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className='flex sm:flex-col items-center justify-between '>
        <div className='flex flex-col gap-1 '>
          <h1 className='text-tertiary' >{"{"}</h1>
          {Object.keys(user).map((key) => (
            <h1 className='ml-5' >
              <span className='text-tertiary'>{key}:</span>
              <span className='text-tertiary'>{user[key]}</span>
            </h1>
          ))}
          <h1 className='text-tertiary'>{"}"}</h1>
        </div>
        <div className='h-[400px]' >
          <lottie-player src="https://lottie.host/cbe6be24-f5b9-4a57-be96-5e09a349bb72/IkM4XsrHxo.json" background="##FFFFFF" speed="1"
            autoplay direction="1"
            mode="normal">
          </lottie-player>
        </div>
      </div>
    </div>
  )
}

export default Contact
