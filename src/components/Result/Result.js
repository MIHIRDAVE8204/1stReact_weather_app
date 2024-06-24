import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Result.css'
import { faCloudSunRain, faDroplet, faDropletSlash, faGlassWaterDroplet, faSun, faSunPlantWilt, faTemperatureHigh, faTemperatureLow, faUpRightAndDownLeftFromCenter, faWaterLadder, faWind } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons/faCloud';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons/faCloudSun';
function Result(props){
    return(
        <div className="main row">
            
            <div className='days  col-md-2'><lable className='innerday'><FontAwesomeIcon icon={faWind} />Windspeed</lable>{props.result.data.wind.speed}</div>
            <div className='days  col-md-2'><lable className='innerday'><FontAwesomeIcon icon={faDroplet} />Humidity</lable>{props.result.data.main.humidity}</div>
            <div className='days  col-md-2'><lable className='innerday'><FontAwesomeIcon icon={faTemperatureHigh} />High</lable>{props.result.data.main.temp_max}</div>
            <div className='days  col-md-2'><lable className='innerday'><FontAwesomeIcon icon={faTemperatureLow} />Low</lable>{props.result.data.main.temp_min}</div>
            <div className='days  col-md-2'><lable className='innerday'><FontAwesomeIcon icon={fapressure} />Pressure</lable>{props.result.data.main.pressure}</div>
            <div className='days  col-md-2'><lable className='innerday'><FontAwesomeIcon icon={faCloud} />Clouds </lable>{props.result.data.clouds.all}</div>
            

        </div>
    )
}
export default Result;