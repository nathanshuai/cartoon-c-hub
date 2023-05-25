import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';


const DetailPage = () => {
  const { objectId } = useParams();
  const [selectedObject, setSelectedObject] = useState(null);

  useEffect(() => {
    const getObject = async () => {
      try {
        const { data } = await axios.get(`https://finalspaceapi.com/api/v0/character/${objectId}`);
        setSelectedObject(data);
      } catch (error) {
        console.log(error);
      }
    };

    getObject();
  }, [objectId]);

  if (!selectedObject) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <>
    <Helmet>
        <title>{selectedObject.name}</title>
    </Helmet>
    <div className='detail'>
      <figure>
        <img src={selectedObject.img_url} alt={selectedObject.name}/>
      </figure>
      <div className='info'>
        <h3>{selectedObject.name}</h3>
        <p> Species: {selectedObject.species ? selectedObject.species : 'unknown'}</p> 
        <p> Gender: {selectedObject.gender ? selectedObject.gender : 'unknown'}</p>
        <p> Status: {selectedObject.status ? selectedObject.status : 'unknown'}</p> 
        <p> Hair:  {selectedObject.hair ? selectedObject.hair : 'unknown'}</p> 
        <p> Origin:  {selectedObject.origin ? selectedObject.origin : 'unknown'}</p>
        <input type='submit' value='Activate Now' className='active-button' />
      </div>          
    </div>
    </>
  );
};

export default DetailPage;


