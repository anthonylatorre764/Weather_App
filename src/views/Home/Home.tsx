import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";




const Home = () => {

    return (
        <>
            <div id="grid_container">
                <NavBar/>
                <div id="home_page">
                    {/* Display weather data */}
                    {true ? (
                        <div id="weather_data_container">
                            <div id="upper_section">
                                <div id="city">Perkasie</div>
                                <div id="temps_box">
                                    <div id="current_temp">70&deg; F</div>
                                    <div id="HL_temps">H: 80&deg; &nbsp; L: 60&deg;</div>
                                </div>
                                <div id="current_weather">Partly Sunny</div>
                                <div id="weather_icon">⛅</div>
                            </div>
                            <div id="middle_section">
                                <h3 id="hourly_head">Hourly</h3>
                                <div id="hourly_container">
                                    <div id="hour0">
                                        <p className="time">7pm</p>
                                        <p className="temp">75&deg;</p>
                                        <p>Sunny</p>
                                    </div>
                                    <div className="hour">
                                        <p className="time">8pm</p>
                                        <p className="temp">73&deg;</p>
                                        <p>Partly Cloudy</p>
                                    </div>
                                    <div className="hour">
                                        <p className="time">9pm</p>
                                        <p className="temp">68&deg;</p>
                                        <p>Partly Cloudy</p>
                                    </div>
                                    <div className="hour">
                                        <p className="time">10pm</p>
                                        <p className="temp">65&deg;</p>
                                        <p>Partly Cloudy</p>
                                    </div>
                                    <div className="hour">
                                        <p className="time">11pm</p>
                                        <p className="temp">63&deg;</p>
                                        <p>Partly Cloudy</p>
                                    </div>
                                    <div className="hour">
                                        <p className="time">12am</p>
                                        <p className="temp">60&deg;</p>
                                        <p>Partly Cloudy</p>
                                    </div>
                                    <div className="hour">
                                        <p className="time">1am</p>
                                        <p className="temp">60&deg;</p>
                                        <p>Clear</p>
                                    </div>
                                    <div className="hour">
                                        <p className="time">2am</p>
                                        <p className="temp">60&deg;</p>
                                        <p>Clear</p>
                                    </div>
                                </div>
                            </div>
                            <div id="lower_section">
                                <div className="lower_item">
                                    <h4 className="item_head">Wind</h4>
                                    <p>5 mph NW</p>
                                </div>
                                <div className="lower_item"> 
                                    <h4 className="item_head">Feels Like</h4>
                                    <p>75&deg;</p>
                                </div>
                                <div className="lower_item"> 
                                    <h4 className="item_head">Humidity</h4>
                                    <p>45%</p>
                                </div>
                                <div className="lower_item"> 
                                    <h4 className="item_head">UV Index</h4>
                                    <p>7</p>
                                </div>
                                <div className="lower_item"> 
                                    <h4 className="item_head">Visibility</h4>
                                    <p>11 mi</p>
                                </div>
                                <div className="lower_item"> 
                                    <h4 className="item_head">Precipitation</h4>
                                    <p>0" last 24hr</p>
                                </div>
                                <div className="lower_item"> 
                                    <h4 className="item_head">Air Quality</h4>
                                    <p>33 - Good</p>
                                </div>
                                <div className="lower_item"> 
                                    <h4 className="item_head">Sunset</h4>
                                    <p>8:29 pm</p>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default Home;



// (city,country)
// https://api.aerisapi.com/conditions/vancouver,bc?format=json&plimit=1&filter=1min&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]

// current location -> (:auto)
// https://api.aerisapi.com/conditions/:auto?format=json&plimit=1&filter=1min&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]
