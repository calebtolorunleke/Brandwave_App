import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiEqualizerLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
     const [searchTerm, setSearchTerm] = useState("");
  return ( 
    <header className='header_container'>
        <img src="/src/assets/Logo.png" alt="Logo" />
        <div className='filterSearch'>
            <div className='filter_container'>
                <RiEqualizerLine />
                <p>Filter</p>
            </div>

                <div className='search_container'>
                <RiSearchLine />
                <input
                    type="text"
                    placeholder='Search...'
                    className='SeachInput'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
        </div>
          
       

        <div className='buttons_container'>
            <IoNotificationsOutline className='notification_icon'/>
            <Link to='/Login' className='btn login_btn'>
                <button>Login</button>
            </Link>

            <Link to='/Register' className='btn header_register_btn'>
                <button> Sign up</button>
            </Link>
        </div>
    </header>
    
  )
}

export default Header;