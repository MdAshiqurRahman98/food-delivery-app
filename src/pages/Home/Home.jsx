import Banner from '../../components/Banner/Banner';
import ItemSection from '../../components/items/ItemSection/ItemSection';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <ItemSection title="Popular"></ItemSection>
            <ItemSection title="Recommended"></ItemSection>
        </>
    );
};

export default Home;