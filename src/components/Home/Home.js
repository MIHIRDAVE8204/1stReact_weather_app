
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import Result from '../Result/Result'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';

function Home() {
    const [search, setsearch] = useState('')
    const [result, setresult] = useState()
    const [showResult, setShowResult] = useState(true)
    const weather = () => {
        setShowResult(false);
        console.log(search);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=34c2d2fd34c54d461b91fc0fbcd62155&units=metric`)
            .then((res) => {
                setresult(res);
                console.log(res)
            })
            .catch((error) => {
                console.error(error);
                // Handle API error here
                
                setresult(null);
              });

    }
    
    return (

        <div className='Main-home container-fluid'>
            <div className='first-section container'>

                <div>
                    <input type="text" onChange={(e) => setsearch(e.target.value)} className='searchbar' placeholder="Search City..." />
                    <button className='search-btn' onClick={() => weather()}>search</button>
                </div>
                
                <div className='top-side'>
                    <label className='header'>
                        <span className='homeday'> {result? <div>{result.data.name}</div>:(showResult? <>Please Enter City Name</>:<>No City Found </>) } </span>
                        {showResult? <></> : (<lable className='celcious'> Temprature : <br />{result? <>{result.data.main.temp} </>:<>0</>}°C</lable>)}

                    </label>
                </div>
                <h1 id="demo"></h1>
            </div>
            <div className='second-section'>
               {result? <Result result={result}/> : <div></div>}

               
            </div>
        </div>

    )
}
export default Home;