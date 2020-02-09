function UserInfo(){
    let user = firebaseProj.auth().currentUser;

    return (
        <table className="table table-bordered">
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
        </table>
    );
}

export default UserInfo;