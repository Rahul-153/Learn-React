import React from 'react'
import './card_style.css';
export default function Card() {
    return ( 
        <div className='card'>
            <img src="https://images.unsplash.com/photo-1454692173233-f4f34c12adad?ixlib=rb-1.2.1&auto=format&fit=crop&w=590&q=80"/>
           <div className="content"> <h1 className='card_head'>A Simple Guide to Design Thinking</h1>
            <p className='card_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                 ex ea commodo consequat.</p>
                 <div className="footer">
                 <p className='card_foot'>John Doe - Product Owner</p>
                 <p className='card_foot1'>Nov 25, 2020</p></div></div>
        </div>
    );
}