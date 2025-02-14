import { type User } from "../types"

export function UsersList ({ users }: { users: User[] }){
    return(
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>País</th>
                    <th>Email</th>
                    <th>Foto</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.login.uuid}>
                            <td>{user.name.first}</td>
                            <td>{user.gender}</td>
                            <td>{user.location.country}</td>
                            <td>{user.email}</td>
                            <td><img src={user.picture.medium} alt="User picture" /></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}