import React, {useState} from 'react';

const Tabs = ({tabs, setTabs}) => {
    const [label, setLabel] = useState("");
    const [content, setContent] = useState("");
    const tab = {label: label, content: content};
    const changeContent = (e, index) => {
        const tab = {label: label, content: content};
        setTabs([...tabs, tab]);
        const filteredTabs = tabs.filter( (tab, kpIdx) => {
            return kpIdx === index;
        })
        setTabs(filteredTabs);
    }
    return (
        <div>
            {tabs.map( (tab, index) => {
                return (
                    <div key={index}>
                        <button onClick={ (e) => changeContent(e, index) }>{tab.label}</button>
                        <textarea>{tab.content}</textarea>
                    </div>
                )
            })}
        </div>
    )
}

export default Tabs;