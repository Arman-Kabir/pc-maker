import React from 'react'

const PcBuilderComponent = ({component,children}) => {
    // console.log(component);
    // console.log(children);
    return (
        <div>
            <p>{component.name}</p>
        </div>
    )
}

export default PcBuilderComponent;