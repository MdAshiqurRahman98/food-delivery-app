import { useSelector } from "react-redux";
import { useGetItemsQuery } from "../../../services/itemApi";
import ItemCard from "../ItemCard/ItemCard";

const ItemSection = ({ title }) => {
    const { data = [], isLoading } = useGetItemsQuery();

    const addedItems = useSelector((state) => state.items.addedItems);

    const items = [...addedItems, ...(data.Items || data || [])];

    if (isLoading) return <p className="text-center py-6">Loading...</p>;

    return (
        <div className="px-4 mt-8">
            <h2 className="text-lg font-semibold mb-4">{title}</h2>

            <div className="flex gap-4 overflow-x-auto">
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