import React, { useState } from 'react'
import { PopupModal } from 'react-calendly'



const BannerButton = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  return (
    <div>
      <button className='flex text-xl mx-auto bg-tangerine-500 px-8 py-2 rounded-full font-bold hover:scale-110 transition-transform active:bg-tangerine-600' onClick={()=> setIsOpen(true)}>Book A Meeting</button>
      <PopupModal
          url="https://calendly.com/thelimitlessmedia"
          // pageSettings={this.props.pageSettings}
          // utm={this.props.utm}
          // prefill={this.props.prefill}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
        />
    </div>
  )
}

export default BannerButton