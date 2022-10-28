import { useState } from "react";

export default function Hero() {
    const [user, setUser] = useState();

    const handleLogin = () => {
        setUser({
            firstName: "Eddie",
            email: "email@email.com",
            admin: true
        })
    }

    const handleLogOut = () => {
        setUser();
    }

    if (!user) {
        return (
            <>
                <p>Please login below.</p>
                <button onClick={handleLogin}>Login</button>
            </>
        )
    }

    return (
        <>
            <h1>Hello {user.firstName || "Guest"}</h1>
            <button onClick={handleLogOut}>Log out</button>
        </>
    )
}