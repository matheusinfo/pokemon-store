import React, {useState, useEffect} from 'react';

import SwitchPage from '../../components/SwitchPage';
import PokemonList from '../../components/PokemonList';

const Home = () =>{
  // HOOKS
  const [page, setPage] = useState(1);
  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(['1','2','3','4','5','6','7','8','9','10','11','12']);
  }, [])

  // FUNCTIONS
  const prevPage = () => {
    if(page === 1) return;

    handleSwitchPrev();
    const pageNumber = page - 1;
    
    setPage(pageNumber);
  }

  const nextPage = () => {
    //964 pokémons / 12 p/pag. = 84 pag.
    if(page === 84) return;

    handleSwitchNext();
    const pageNumber = page + 1;

    setPage(pageNumber);
  }

  const handleSwitchNext = async () => {
    const idNumber = array.map(id => Number(id));
    const lastId = idNumber[11];
    const emptyArray = [];
    await setArray(emptyArray);

    if(lastId === 960) return setArray('961','962','963','964');
    
    const newArray = idNumber.map((id, count) => (lastId + count));
    const finalArray = newArray.map(id => id.toString());

    setArray(finalArray);
  }

  const handleSwitchPrev = async () => {
    const idNumber = array.map(id => Number(id));
    const lastId = idNumber[0];
    const emptyArray = [];
    await setArray(emptyArray);

    if(lastId === 960) return setArray('961','962','963','964');
    
    const newArray = idNumber.map((id, count) => (lastId - count));
    const reverseArray = newArray.reverse();
    const finalArray = reverseArray.map(id => id.toString());

    setArray(finalArray);
  }
  
  return(
    <>
        <PokemonList listID={array}/>
        <SwitchPage page={page} nextPage={nextPage} prevPage={prevPage}/>
    </>
  )
}

export default Home;