import React from 'react';
import Part from '../components/Part';


const Home = ({lists:{lists}}: any) => {
  
  return (
    <div>
      <h4 className="home-items">Item List</h4>
      <div>
        {lists && lists.length > 0 && lists.map((list: any, index: number) => (
          <Part
            key={index}
            name={list.name}
            status={list.status}
            id={list.id}
          />
        ))} 
        
      </div>
    </div>
  );
};

export default Home;
