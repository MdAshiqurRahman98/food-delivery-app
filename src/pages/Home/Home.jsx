import Banner from '../../components/Banner/Banner';
import ItemSection from '../../components/items/ItemSection/ItemSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ItemSection title="Popular"></ItemSection>
            <ItemSection title="Recommended"></ItemSection>
        </div>
    );
};

export default Home;