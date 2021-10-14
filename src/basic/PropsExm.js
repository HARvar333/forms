import React from 'react';

const PropsExm =(props) =>{

    return(
        <div className="card">
            <img src={props.img} alt="azome" />
            <p> {props.name}</p>  
        </div>
    )
}
export default PropsExm;