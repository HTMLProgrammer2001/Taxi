import firebaseProj from 'js/fareConfig';

import {Table} from 'reactstrap';

function UserInfo(){
    let user = firebaseProj.auth().currentUser;

    return (
        <Table hover bordered className = "mb-0 bg-white">
            <tbody>
            <tr>
                <td>Имя</td>
                <td>{user.displayName}</td>
            </tr>

            <tr>
                <td>Email</td>
                <td>{user.email}</td>
            </tr>

            <tr>
                <td>Email подтвержден</td>

                {
                    user.emailVerified
                        ?
                        <td className="text-success">
                            Подтвержден
                        </td>
                        :
                        <td className="text-danger">
                            Не подтвержден
                        </td>
                }
            </tr>
            </tbody>
        </Table>
    );
}

export default UserInfo;