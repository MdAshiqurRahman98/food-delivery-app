import { useContext } from "react";
import { FiChevronRight } from "react-icons/fi";
import ItemCard from '../ItemCard/ItemCard';
import ItemContext from "../../../context/ItemContext";

const ItemSection = ({ title }) => {
    const { items, loading } = useContext(ItemContext);

    if (loading) return <p className="text-center py-6">Loading...</p>;

    return (
        <div className="px-4 mt-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <FiChevronRight className="text-gray-500" />
            </div>

            {/* Mobile: horizontal scroll */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                {items.map((item, index) => (
                    <div key={index} className="min-w-40">
                        <ItemCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemSection;