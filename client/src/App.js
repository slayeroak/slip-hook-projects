import React from 'react';
import Layout from './core/Layout';

const App = () => {
    return (
        <Layout>
            <div className="col-md-6 offset-md-3 text-center">
                <h1 className="p-5">Slip Hook Project</h1>
                <h2>Home Page material goes here</h2>
                <hr />
                <p className="lead">
                    Project Features completed:
                    MERN stack login register system with account activation, forgot password, reset password, login
                    with facebook and google as well as private and protected routes for authenticated user and users
                    with the role of admin.
                </p>
            </div>
        </Layout>
    );
};

export default App;