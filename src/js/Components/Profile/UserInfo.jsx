function UserInfo(){
    let user = firebaseProj.auth().currentUser;

    return (
        <table className="table table-bordered">
            <tbody>
            <tr>
                <td>Name</td>
                <td>{user.displayName}</td>
            </tr>

            <tr>
                <td>Email</td>
                <td>{user.email}</td>
            </tr>

            <tr>
                <td>Email verified</td>

                {
                    user.emailVerified
                        ?
                        <td className="text-success">
                            Verified
                        </td>
                        :
                        <td className="text-danger">
                            Unverified
                        </td>
                }
            </tr>
            </tbody>
        </table>
    );
}

export default UserInfo;