import React, { useState } from 'react'

function TodoList() {
    const [activity, setActivity] = useState([{
        activ: "",
        time: ""
    }])

    const [listData, setlistData] = useState([])
    function addActivity() {

        setlistData((listData) => {
            const updateList = [...listData,activity]
            // console.log(updateList)
            return updateList;            
        })
        
        setActivity("")
        console.log(listData)
    }
    function removeActivity(i) {
        const updatedListData = listData.filter((id) => {
            return i !== id;
        })
        setlistData(updatedListData)
    }
    function removeAll() {
        setlistData([])
    } 

    return (
        <>
            <form className='container' onSubmit={(e) => (e.preventDefault())}>
                <div className='heading'>TODO LIST</div>
                <input type="text" placeholder="Add Activity" value={activity.activ} onChange={(e) => setActivity(e.target.value)} />
                <input type="time" step="1" value={activity.time} onChange={(e) => setActivity(e.target.value)}
                />
                <button onClick={addActivity}>Add</button>
                <p className='list-heading'>Heare is yor List:</p>
                {listData.map((data, i) => {
                    return (
                        <div key={i}>
                            <p className='listData'>{data}<span> </span></p>
                            <div><button onClick={() => removeActivity(i)}>Remove(-)</button></div>
                        </div>
                    )
                })}
                {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
            </form>
        </>
    )
}

export default TodoList;