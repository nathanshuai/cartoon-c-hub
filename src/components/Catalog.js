import {useState, useEffect} from 'react';
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';


function Catalog() {
  const [ characters, setCharacters ] = useState([]);
  const navigate = useNavigate();
  let title = 'Cartoon Hub';
  let navigation = 'About us'
  

  useEffect(() => {
    const getCharacters = async () => {
        try {
            const { data } = await axios.get(`https://finalspaceapi.com/api/v0/character`);
            const list =data.splice(0, 30);
            setCharacters(list);
            
           } catch(error) {
              console.log(error);
           }
        };
        getCharacters(); 
    }, []);

    const handleClick = (objectId) => {
        navigate(`/detail/${objectId}`);
      };
    
    const handleAdd = () => {
        navigate(`/new`);
      };

// Sort the JSON data by the "name" property in alphabetical order

    const handleSort = () => {
        const sortedCharacters = [...characters]; // Create a new array to avoid mutating the original state
        sortedCharacters.sort((a, b) => {
            const nameA = a.name.toLowerCase().trim();
            const nameB = b.name.toLowerCase().trim();

            if (nameA < nameB) {
              return -1; 
            }
            if (nameA > nameB) {
              return 1; 
            }
            return 0; 
          });

    setCharacters(sortedCharacters); 
  };

  return (
    <>
     <Header title={title} navigation={navigation}/>
     <div className='container'>
       <form  className='sort'>
            <input type='sort' value="By Name" className= 'sort-button'  onClick={handleSort}/>
            <input type='submit' value="Add New" className= 'add-button'  onClick={handleAdd} />
       </form>
      <section>
        {characters.map(character => (
            <div key={character.id} className='character'onClick={() => handleClick(character.id)}>
                <h2>{character.name}</h2>
                <figure>
                    <img src={character.img_url} alt={character.name}/>
                </figure>
                <p> Species: {character.species ? character.species : 'unknown'}</p> 
                <p> Gender: {character.gender ? character.gender : 'unknown'}</p>
            </div>
        ))}
       </section>
     </div>
     <Footer />
    </>
   )};
   
export default Catalog;