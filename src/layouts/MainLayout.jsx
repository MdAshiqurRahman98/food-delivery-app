import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='bg-white'>
            <div className="max-w-7xl mx-auto min-h-screen px-16 py-7">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div className='max-w-7xl mx-auto'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;