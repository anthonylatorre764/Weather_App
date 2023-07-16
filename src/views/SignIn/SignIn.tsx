import { FormEvent, useState } from "react"
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../../firebase.tsx'
import { Link, useNavigate } from "react-router-dom"
import './SignIn.css'


const SignIn = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    // Sign In User
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user.displayName === null && auth.currentUser) {
                    updateProfile(auth.currentUser, {
                        displayName: 'Bob' 
                    })
                    .then(() => {
                        console.log(`displayName successfully updated`)
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage)
                    })
                }
                console.log(user.displayName)
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    

    


  return (
    <>
        <div>SignIn</div>
        <form id="signin_form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="signin_label">Email</label>
            <input 
                type="text" 
                name="email"
                value={user.email}
                onChange={(event) => setUser({...user, email: event.target.value})}
            />
            <label htmlFor="password" className="signin_label">Password</label>
            <input 
                type="password" 
                name="password"
                value={user.password}
                onChange={(event) => setUser({...user, password: event.target.value})}
            />
            <input type="submit" id="signin_submit_btn" />
            <p>New User? <Link to='/signup'>Sign Up</Link></p>
        </form>
    </>
    
  )
}

export default SignIn