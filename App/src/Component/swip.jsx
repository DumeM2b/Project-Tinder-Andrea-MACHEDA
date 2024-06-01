import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import tinder from './Tinder-Logo.png';
import pastille from './a.jpg'

function Simple() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);


  return (
    <div>
      <div className="logo-Tinder">
      <img src={tinder} alt="" />
      </div>
      <div className='cardContainer'>
        
        {users.map((user) => (
          <TinderCard
            className='swipe'
            key={user.id}
            data-name={user.firstname}
          >
            <div className="cardPeople">
                <div  className='card'  style={{ backgroundImage: 'url(' + user.picture + ')' }}>
                  <div className="linear-gradient">
                    <div className="infoUsers">
                      <div className="info-nom-age">
                        <h3 className='nom'>{user.firstname} </h3>
                        <h3 className='age'>{user.age}</h3>
                        <div className="pastille">
                           <img src={pastille} alt="" />
                        </div>
                        
                      </div>
                      <div className="country-info">
                      <div className="info-country">
                        <h5>{user.city}</h5>
                        
                      </div>
                      <span>i</span>
                      </div>
                      
                      <div className="bio">
                        <p>{user.bio}</p>
                      </div>
                        
                    </div>
                  </div>
                    
                </div>
                
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Simple;
