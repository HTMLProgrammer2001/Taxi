import Layout from 'js/Layout';

function Profile(){
    let user = firebaseProj.auth().currentUser;

    return(
            <div className="container my-5 row justify-content-center">
                <div className="overflow-hidden col-sm-3 col-offset-2">
                   <img src={require('assets/defAvatar.png')} alt=""/>
                </div>

                <table className="table table-bordered col-sm-6">
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
            </div>
    );
}

export default Layout(Profile);