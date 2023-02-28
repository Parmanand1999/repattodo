import React, { useState } from 'react'

function TodoList() {
    const [activity, setActivity] = useState({
        activ: "",
        time: ""
    })
    // const [editingIndex, setEditingIndex] = useState(null);
    const [listData, setlistData] = useState([])
    function addActivity() {
        setlistData(listData => [...listData, activity]);
        setActivity({ activ: "", time: "" })
       
    }
    // console.log(listData)
    function removeActivity(i) {
        console.log(i)
        const newitem = listData.filter((s, id) => (id !== i));
        setlistData(newitem)
    }
    function editActity(i) {
        setActivity({
            activ: listData[i].activ,
            time: listData[i].time
        })
        // setEditingIndex(i);
    }
    function removeAll() {
        setlistData([])
    }
    // console.log(activity)
    return (
        <>
            <form className='container' onSubmit={(e) => (e.preventDefault())}>
                <div className='heading'>TODO LIST</div>
                <input type="text" placeholder="Add Activity" value={activity.activ} onChange={(e) => setActivity(p => ({ ...p, activ: e.target.value }))} />
                <input type="time" step="1" value={activity.time} onChange={(e) => setActivity(p => ({ ...p, time: e.target.value }))}
                />
                <button onClick={addActivity}>Add</button>
                <p className='list-heading'>Heare is yor List:</p>
                {listData.map((data, i) => {
                    return (
                        <div key={i}>
                            <p className='listData'>{data.activ}<span> {data.time}</span></p>
                            <div><button onClick={() => removeActivity(i)}>Remove(-)</button></div>
                            <div><button onClick={() => editActity(i)}>Edit</button></div>
                        </div>
                    )
                })}
                {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
            </form>
        </>
    )
}

export default TodoList;