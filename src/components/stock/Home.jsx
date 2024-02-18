import React from 'react'

const Logout = () => {
    localStorage.clear()
    setTimeout(() => {
        window.location.reload()
    }, 1500);
}

const Home = () => {
    return (
        <button onClick={Logout}>ออกจากระบบ</button>
    )
}
export default Home