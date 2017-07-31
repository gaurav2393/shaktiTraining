import React from 'react';

class ContactUs extends React.Component{
    render() {
        return(
            <main>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="email" id="username" required/>
                    <label htmlFor="username">Password</label>
                    <input type="password" id="password" required/>
                    <input type="submit" />
                </form>
            </main>
        )
    }
}

export default ContactUs;