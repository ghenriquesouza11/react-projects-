import React, {useState, useEffect} from 'react';
import Tour from './Tour';


const Tours = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch('https://course-api.com/react-tours-project');
    const data = await response.json();
    setLocations(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])
  const rmLocation = (id) => {
    const newLocations = locations.filter((location) => location.id !== id)
    setLocations(newLocations);
  }


  if(loading) {
    return <h2>Loading...</h2>
  }

  if(locations.length === 0) {
    return (
      <>
        <h3 className='no-tours-heading'>No Tours Left</h3>
        <button onClick={ () => fetchData() } className='refresh-btn'>Refresh</button>
      </>
    );
  }

  return (
    <>
      <h2>Our Tours</h2>
      <hr/>
      <ul className='locations-list'>
      {
        locations.map((location) => {
          const { id, name, info, image, price } = location;
          return (
            <li key={ id } className='location-item'>
              <Tour 
                id={ id }
                name={ name }
                info={ info }
                imgSrc={ image }
                rmLocation = { rmLocation }
                price={ price }
              />
            </li>
          );
        } )
      }
    </ul>
    </>
  );
};

export default Tours;
