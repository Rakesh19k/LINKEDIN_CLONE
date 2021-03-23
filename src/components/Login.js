import React, { useState } from 'react'
import "./CSS/Login.css"
import { auth } from './firebase'
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const dispatch = useDispatch()

    const register = () => {
        if (!name) {
            return alert("Please enter a full name!")
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then (() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrL: profilePic
                }))
            })
        }).catch (error => alert(error, "jshhdbgcjhsd"));
    }

    const loginToApp = (e) => {
        e.preventDefault()
        // auth
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            }))
        }).catch(error => alert(error,"rakehs"))
    }

    return (
        <div className="login">
            <img
                src="http://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
                alt=""
            />

            <form>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    placeholder="Full name (required if registering)" 
                />
                <input 
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    type="text" 
                    placeholder="Profile pic URL (optional)" 
                />
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="Email" 
                />
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password" 
                />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?{" "}
                <span className="login_register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
