import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout';
import RootLayout from '../../components/layouts/RootLayout';

const Admin = () => {
    return (
        <div>admin</div>
    )
}

export default Admin;

Admin.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            <DashboardLayout>
                {page}
            </DashboardLayout>
        </RootLayout>
    )
}
