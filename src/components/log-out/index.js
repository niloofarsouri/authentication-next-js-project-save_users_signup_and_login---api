'use client'


function LogoutClick({ cookieStore }) {



    const handleLogOut = () => {

        fetch('/api/logout', {
            method: 'POST',
            body: JSON.stringify({ cookieStore })
        })
            .then((res) => { })
            .catch((error) => error)
    }

    return (
        <>
            <form onClick={handleLogOut} className="cursor-pointer">
                <input type="submit" value='Logout' />
            </form>
        </>
    )
}


export default LogoutClick