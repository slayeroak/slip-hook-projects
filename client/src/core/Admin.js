import React from 'react';
import Layout from '../core/Layout';
import SlipHookLogo from "../Splash-Screen.png"

const Admin = () => (
    <Layout>
        <h1>Admin page</h1>
        <div class="jumbotron">
            <img src={ SlipHookLogo } alt="Slip Hook Logo" />
        </div>
    </Layout>
);

export default Admin;
