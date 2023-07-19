import './NavBar.css'
import { Link } from 'react-router-dom'
import { useState, useEffect, FormEvent } from 'react'
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { BsSearch } from 'react-icons/bs'





interface CurrentUser {
    id: string;
    email: string;
}



const NavBar = () => {
  
    // example "philadelphia,pa"
    const [place, setPlace] = useState('')



    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(place)
    }
  



    // const [weatherData, setWeatherData] = useState({
    //     conditions: {
    //         city: "",
    //         temp: 0,
    //         weather: "",
    //         weather_icon: "",
    //         wind_speed: 0,
    //         wind_dir: "",
    //         feels_like: 0,
    //         humidity: 0,
    //         uvi: 0,
    //         visibility: 0,
    //         precip_accum: 0
    //     },
    //     forecast: {
    //         high_temp: 0,
    //         low_temp: 0,
    //         sunset_time: ''
    //     },
    //     air_quality: {
    //         index: 0
    //     },
    //     hourly: {
    //         0: {
    //             time: '',
    //             temp: 0,
    //             weather: ''
    //         },
    //         1: {
    //             time: '',
    //             temp: 0,
    //             weather: ''
    //         },
    //         2: {
    //             time: '',
    //             temp: 0,
    //             weather: ''
    //         },
    //         3: {
    //             time: '',
    //             temp: 0,
    //             weather: ''
    //         },
    //         4: {
    //             time: '',
    //             temp: 0,
    //             weather: ''
    //         },
    //         5: {
    //             time: '',
    //             temp: 0,
    //             weather: ''
    //         },
    //         6: {
    //             time: '',
    //             temp: 0,
    //             weather: ''
    //         },
    //         7: {
    //             time: '',
    //             temp: 0,
    //             weather: ''
    //         }
    //     }
        
    // });




    // const getConditions = async () => {
    //     const response = await fetch(
    //         "https://api.aerisapi.com/conditions/minneapolis,mn?format=json&plimit=1&filter=24hr&client_id=mOc3HLvPhIxt50xIqDR0B&client_secret=OZmgNHg8YY2YVqxlyNIPdkGCEvtDJHFCdFYbT0cZ"
    //     );
    //     const data = await response.json();
    //     setWeatherData({ ...weatherData,
    //         conditions: {
    //             city: data.response[0].place.name,
    //             temp: data.response[0].periods[0].tempF,
    //             weather: data.response[0].periods[0].weather,
    //             weather_icon: data.response[0].periods[0].icon,
    //             wind_speed: data.response[0].periods[0].windSpeedMPH,
    //             wind_dir: data.response[0].periods[0].windDir,
    //             feels_like: data.response[0].periods[0].feelsLikeF,
    //             humidity: data.response[0].periods[0].humidity,
    //             uvi: data.response[0].periods[0].uvi,
    //             visibility: data.response[0].periods[0].visibilityMI,
    //             precip_accum: data.response[0].periods[0].precipIN
    //         }
    //     });
    // };



    // const getForecast = async () => {
    //     const response = await fetch(
    //         "https://api.aerisapi.com/forecasts/minneapolis,mn?format=json&filter=day&limit=7&client_id=mOc3HLvPhIxt50xIqDR0B&client_secret=OZmgNHg8YY2YVqxlyNIPdkGCEvtDJHFCdFYbT0cZ"
    //     );
    //     const data = await response.json();
    //     setWeatherData({ ...weatherData,
    //         forecast: {
    //             high_temp: data.response[0].periods[0].maxTempF,
    //             low_temp: data.response[0].periods[0].minTempF,
    //             sunset_time: data.response[0].periods[0].sunsetISO
    //         }
    //     });
    // }



    // const getAirQuality = async () => {
    //     const response = await fetch(
    //         "https://api.aerisapi.com/airquality/minneapolis,mn?format=json&client_id=mOc3HLvPhIxt50xIqDR0B&client_secret=OZmgNHg8YY2YVqxlyNIPdkGCEvtDJHFCdFYbT0cZ"
    //     );
    //     const data = await response.json();
    //     setWeatherData({ ...weatherData,
    //         air_quality: {
    //             index: data.response[0].periods[0].aqi
    //         }
    //     });
    // }



    // const getHourly = async () => {
    //     const response = await fetch(
    //         "https://api.aerisapi.com/forecasts/minneapolis,mn?format=json&filter=1hr&limit=8&fields=&client_id=mOc3HLvPhIxt50xIqDR0B&client_secret=OZmgNHg8YY2YVqxlyNIPdkGCEvtDJHFCdFYbT0cZ"
    //     );
    //     const data = await response.json();
    //     setWeatherData({ ...weatherData,
    //         hourly: {
    //             0: {
    //                 time: data.response[0].periods[0].dateTimeISO.slice(11, 19),
    //                 temp: data.response[0].periods[0].tempF,
    //                 weather: data.response[0].periods[0].weather
    //             },
    //             1: {
    //                 time: data.response[0].periods[1].dateTimeISO.slice(11, 19),
    //                 temp: data.response[0].periods[1].tempF,
    //                 weather: data.response[0].periods[1].weather
    //             },
    //             2: {
    //                 time: data.response[0].periods[2].dateTimeISO.slice(11, 19),
    //                 temp: data.response[0].periods[2].tempF,
    //                 weather: data.response[0].periods[2].weather
    //             },
    //             3: {
    //                 time: data.response[0].periods[3].dateTimeISO.slice(11, 19),
    //                 temp: data.response[0].periods[3].tempF,
    //                 weather: data.response[0].periods[3].weather
    //             },
    //             4: {
    //                 time: data.response[0].periods[4].dateTimeISO.slice(11, 19),
    //                 temp: data.response[0].periods[4].tempF,
    //                 weather: data.response[0].periods[4].weather
    //             },
    //             5: {
    //                 time: data.response[0].periods[5].dateTimeISO.slice(11, 19),
    //                 temp: data.response[0].periods[5].tempF,
    //                 weather: data.response[0].periods[5].weather
    //             },
    //             6: {
    //                 time: data.response[0].periods[6].dateTimeISO.slice(11, 19),
    //                 temp: data.response[0].periods[6].tempF,
    //                 weather: data.response[0].periods[6].weather
    //             },
    //             7: {
    //                 time: data.response[0].periods[7].dateTimeISO.slice(11, 19),
    //                 temp: data.response[0].periods[7].tempF,
    //                 weather: data.response[0].periods[7].weather
    //             }
    //         }
    //     })
    // }



    const [user, setUser] = useState<CurrentUser | null>(null);

    // get current user's email and uid
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            const email = user.email;
            const id = user.uid;
            // Type Narrowing
            if (typeof email === "string" && typeof id === "string") {
                setUser({ id: id, email: email });
            }
        }
        });
    }, []);

    const navigate = useNavigate();

    // sign out user
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            navigate("/signin");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    };





    return (
    <>
        <div id='navbar_container'>
            <div id="upper_area">
                <div id="app_logo_container">
                    <TiWeatherPartlySunny /> MyWeather
                </div>
            </div>
            <div id="middle_area">
                <form id='search_form'>
                    <div id='search_input_container'>
                        <input
                            id='search_input'
                            type="text" 
                            name="search"
                            value={place}
                            onChange={(event) => setPlace(event.target.value)}
                        />
                    </div>
                    <div id="search_btn_container">
                        <button onClick={handleSubmit} id="search_btn"><BsSearch/></button>
                    </div>
                </form>
                <div id='page_links_container'>
                    <div>
                        <Link className='navbar_link' to={'/favorites'}>Favorites</Link>
                    </div>
                    <Link className='navbar_link' to={'/weather_alerts'}>Severe Weather</Link>
                </div>
            </div>
            <div id="lower_area">
                {user ? (<span>Hello {user.email}</span>) : null}
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>
    </>
  )
}

export default NavBar;