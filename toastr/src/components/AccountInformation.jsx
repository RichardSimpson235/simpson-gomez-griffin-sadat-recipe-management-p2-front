/**
 * UserAccountInfo function - display a user account information  
 * 
 * @param user {{username:string, dateOfBirth: string, registrationDate: string, email: string, phone:string}}
 * @returns type is JSX.Element
 */

 export default function UserAccountInfo({ user }){   

    return(<>

    <h3>Username: {user.username}</h3>
    <h3>Birth Date: {user.dateOfBirth}</h3>
    <h3>Regstration Date: {user.registrationDate}</h3>
    <h3>Email: {user.email}</h3>
    <h3>Phone: {user.phone}</h3>

    </>);  
 
}