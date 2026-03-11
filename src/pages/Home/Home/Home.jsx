import Banner from '../Banner/Banner';
import ItemSection from '../ItemSection/ItemSection';

const Home = () => {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <Banner></Banner>
            <ItemSection title="Popular"></ItemSection>
            <ItemSection title="Recommended"></ItemSection>
        </div>
    );
};

export default Home;