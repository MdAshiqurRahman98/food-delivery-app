import Banner from '../../components/Banner/Banner';
import ItemSection from '../../components/items/ItemSection/ItemSection';

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