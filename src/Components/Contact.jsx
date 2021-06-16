import React from 'react'
import { useState } from 'react';
export const Contact = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <header onClick= {() => setCount(count +1) }>
           Plus
            </header>
        </div>
    )
}
module.exports = Contact;