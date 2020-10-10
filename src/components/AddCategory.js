import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {
    
    const [InputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setCategories( cats =>[InputValue,...cats ] );
          

    
        
    }
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ InputValue }
                onChange={ handleInputChange }
            />
        </form>
        
    )
}
