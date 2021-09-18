import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const flagStyle = {height: '50px'};
    const countryStyle = {border:'1px solid red', margin:'10px', padding:'10px'};

    const handelAddCountry = props.handelAddCountry;
    return (
        <div style={countryStyle}>
            <h4>{name}</h4>
            <img src={flag} alt="" style={flagStyle}/>
            <p>Population:{population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handelAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;