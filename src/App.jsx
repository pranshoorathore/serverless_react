import { useState } from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://movies-tv-shows-database.p.rapidapi.com/',
  params: {
    year: '2020',
    page: '1'
  },
  headers: {
    'x-rapidapi-key': '7454eaa6c9mshc4505b4749479dcp1384a2jsn145576c379bf',
    'x-rapidapi-host': 'movies-tv-shows-database.p.rapidapi.com',
    Type: 'get-shows-byyear'
  }
};

const App = () => {

  const [data, setData] = useState([]);

  async function getData(){
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data.tv_results)
    } catch (error) {
      console.error(error);
    }
  }

  getData();

  return (
    <>
      <nav>Navbar</nav>
      <section>
        {
          data.map((movieData)=>
            <div className='card' key={movieData.id}>
                <h2>{movieData.title}</h2>
                <h3>Year: {movieData.year}</h3>
            </div>
          )
        }
      </section>
      <footer>Footer</footer>
    </>
  )
}

export default App
