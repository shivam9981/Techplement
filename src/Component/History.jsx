import React from 'react'
import { useSelector } from 'react-redux'
const History = () => {
    const data = useSelector(state => state.getdata.data)
    return (
        <div className='container'>
            <div className='inner-container'>
                <p className='p-tag '>HISTORY</p>
                <div className='history-show '>
                    {
                        !data ? null : data.answer.map((e) =>
                            <p key={e._id} id='p-history'>{e.data}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default History