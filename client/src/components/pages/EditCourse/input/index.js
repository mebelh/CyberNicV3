import React, {useState} from "react"

export function EditInput ({initVal = '', setChanges, keyName, changes}){
    const [value, setValue] = useState(clone(initVal))
    return (
        <textarea
            style={{
                height: 'inherit',
                display: 'block'
            }}
            rows={value.split('\n').length}
            onChange={
                (event)=>{
                    setValue(event.target.value || '')
                    setChanges({...changes ,[keyName]: event.target.value})
                }
            }
            value={value}
        />
    )
}

export function EditModule({initVal = '', setChanges, index, keyName}) {
    const [value, setValue] = useState(clone(initVal))
    return (
        <input
            onChange={
                ({target})=>{
                    setValue(target.value)
                    setChanges(keyName, target.value , index)
                }
            }
            value={value}
        />
    )
}

export function EditLecture({initVal = '', keyName, index, lectureIndex, setChanges}){
    const [value, setValue] = useState(clone(initVal))
    return (
        <input
            onChange={
                ({target})=>{
                    setValue(target.value)
                    setChanges(keyName, target.value, index, lectureIndex)
                }
            }
            value={value}
        />
    )
}

function clone(val){
    return JSON.parse(JSON.stringify(val)) || val
}