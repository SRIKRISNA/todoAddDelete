import React from 'react'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo">To Do List</div>
            <div className="search">
                <input type='search' placeholder='Search here...' value=''></input>
            </div>
        </div>)
}

export default Header