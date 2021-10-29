import React, {useState} from 'react';

const initData = {
    msg:'',
    content:'',
    writer:''
}

const InputEx = () => {

    const [data, setData] = useState({...initData})

    const handleChange = (e) => {
        const target = e.target

        const targetName = target.name

        data[targetName] = target.value

        console.log("-----------------")
        console.log(data)
        console.log(initData)
        console.log("=======================")

        setData({...data})

    }

    const handleClear = (e) => {
        setData({...initData})
    }

    return (
        <div>
            <h2>INPUT</h2>
            <h3>{data.msg} --------------{data.content}</h3>
            <input type='text' name='msg' value={data.msg} onChange={(e) => {  handleChange(e) }}/>
            <input type='text' name='content' value={data.msg} onChange={(e) => {  handleChange(e) }}/>

            <button onClick={(e) => handleChange(e)}>CLEAR</button>
        </div>
    );
};

export default InputEx;