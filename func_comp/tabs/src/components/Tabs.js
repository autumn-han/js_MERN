import React, {useState} from 'react';

const Tabs = (props) => {
    const {allTabs, tabIndex, setTabIndex} = props
    const currentTab = (index) => {
        setTabIndex(index);
    }
    return (
        <div>
            {allTabs.map( (tab, index) => {
                return (
                    <div key={index}>
                        <button onClick={ (e) => currentTab(index) }>{tab.label}</button>
                    </div>
                )
            })}
            <div>
                <p>{allTabs[tabIndex].content}</p>
            </div>
        </div>
    )
}

export default Tabs;