import React,{useEffect,useState} from 'react';
import {Card,FormField,Loader} from '../components';

function Home() {

  const [searchText,setSsearchText] = useState('');

  const handleSearchChange = () => {

  }

  return (
      <>
        <section>
          <div>
            <h1>The Community Showcase</h1>
            <p>Browse through a collection of imaginative and visually stunning images generated by DALL-E AI</p>
          </div>

          <div>
            <FormField
              lableName="Searchposts"
              type="text"
              name="text"
              placeholder="search something.."
              value={searchText}
              handleChange={handleSearchChange}
            />
          </div>

          <div>
            
          </div>
        </section>
      </>
  )
}

export default Home
