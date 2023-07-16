import { FormEvent, useState } from "react"
import { auth } from '../../firebase.tsx'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import './SignUp.css'


const SignUp = () => {

    const [newUser, setNewUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()

   const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate('/signin')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
   }


  return (
    <>
        <div>SignUp</div>
        <form id="signup_form" onSubmit={handleSubmit}>
            <label htmlFor="first_name" className="signup_label">First Name</label>
            <input 
                type="text" 
                name="first_name"
                value={newUser.first_name}
                onChange={(event) => setNewUser({...newUser, first_name: event.target.value})}
            />
            <label htmlFor="last_name" className="signup_label">Last Name</label>
            <input 
                type="text" 
                name="last_name"
                value={newUser.last_name}
                onChange={(event) => setNewUser({...newUser, last_name: event.target.value})}
            />
            <label htmlFor="email" className="signup_label">Email</label>
            <input 
                type="text" 
                name="email"
                value={newUser.email}
                onChange={(event) => setNewUser({...newUser, email: event.target.value})}
            />
            <label htmlFor="password" className="signup_label">Password</label>
            <input 
                type="password" 
                name="password"
                value={newUser.password}
                onChange={(event) => setNewUser({...newUser, password: event.target.value})}
            />
            <input type="submit" id="signup_submit_btn" />
            <p>Already have an account? <Link to='/signin'>Sign In</Link></p>
        </form>
    </>
  )
}

export default SignUp