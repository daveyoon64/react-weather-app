import React from "react";

const Form = (props) => (
    <form onSubmit={props.getWeather}>
        <input type="text" maxLength={20} name="city" placeholder="City..."/>
        <input type="text" maxLength={20} name="country" placeholder="Country..." />
        <button>Get Weather</button> 
    </form>
);

export default Form;