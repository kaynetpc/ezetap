import React from 'react'
import './ViewContainer.css'

type Props = {
    view: {
        desktop: any;
        mobile: any;
    }
}

export const ViewContainer = ({view}: Props) => {
  return (
    <>
        <div className='desktop-view'>
            {view.desktop}
        </div>
        <div className='mobile-view'>
            {view.mobile}
        </div>
    </>
  )
}