import React from 'react';

//ES6 Nested destructering for meta
export default ({ input, label, icon, meta: { error, touched } }) => {
    return (
        <div>
            <i class="material-icons left deep-purple lighten-3">{icon}</i>   
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}  
            </div>   
        </div>  
    );
};
