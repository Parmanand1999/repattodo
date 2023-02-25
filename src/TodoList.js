import React, { useState } from 'react'

function TodoList() {
    const [activity, setActivity] = useState("")
    const [time, setTime] = useState("00:00:00")
    // const [listtime, setlistTime] = useState([])
    const [listData, setlistData] = useState([])
    function addActivity() {
        // setlistData([...listData, activity])
        // console.log(listData)
        setlistData((listData) => {
            const updateList = [...listData, activity]
            setActivity("")
            
            return updateList;
        })
//         setlistTime((time) => {
//             const updatetime = [...listtime, time]
//             setTime("")
//             return updatetime;
// })
        // console.log(updateList)
    }
    function removeActivity(i) {
        const updatedListData = listData.filter((elem, id) => {
            return i !== id;
        })
        setlistData(updatedListData)
    }
    function removeAll() {
        setlistData([])
    }
    return (
        <>
            <div className='container'>
                <div className='heading'>TODO LIST</div>
                <input type="text" placeholder="Add Activity" value={activity} onChange={(e) => setActivity(e.target.value)} />
                <input type="time" step="1" value={time}  placeholder="Time" onChange={(e) => setTime(e.target.value)}
                />
                <button onClick={addActivity}>Add</button>
                <p className='list-heading'>Heare is yor List:</p>
                {listData.map((data, i) => {
                    return (

                        <div key={i}>
                            <p className='listData'>{data}<span>     {time }</span></p>
                            <div><button onClick={() => removeActivity(i)}>Remove(-)</button></div>
                        </div>
                    )
                })}
                {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
            </div>
        </>
    )
}

export default TodoList