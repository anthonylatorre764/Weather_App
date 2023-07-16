import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CurrentUser {
  id: string;
  email: string;
}

const Home = () => {
    const getData = async () => {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=40.367390&lon=-75.293610&appid=40cf4c122703c3c0ef79881bdef0bd80"
      );
      const data = await response.json();
      console.log(data);
    };


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
    });

    const navigate = useNavigate()

    // sign out user
    const handleSignOut = () => {
        signOut(auth).then(() => {
          setUser(null)
          navigate('/signin')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
        })
    }


  return (
    <>
      <div>Home</div>

      {/* Use this ternary operator in NavBar */}
      {user ? <span>Hello {user.email}</span>: <span>no one is signed in</span>}

      <button onClick={getData}>Get Weather</button>
      
      {/* Place Sign Out button on the bottom of vertical NavBar */}
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
};

export default Home;
