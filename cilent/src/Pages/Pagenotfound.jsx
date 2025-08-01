import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
    return (
        <Layout title={"pagenotfound-Ecommerce App"}>
            <div className='pnf'>
                <h1 className='pnf-title'>404</h1>
                <h2 className='pnf-heading'>Oops! Page not Found</h2>
                <Link to='/' className='pnf-btn'>Go Back</Link>
            </div>
        </Layout >
    )
}

export default Pagenotfound