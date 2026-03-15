import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="bg-white max-w-7xl mx-auto min-h-screen px-16 py-7">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;