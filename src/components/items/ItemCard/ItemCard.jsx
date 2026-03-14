

const ItemCard = ({ item }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
                src={item.Image || item.image}
                alt={item.Name}
                className="h-40 w-full object-cover"
            />

            <div className="p-2 text-center">
                <h3 className="text-sm font-medium">{item.Name}</h3>
            </div>
        </div>
    );
};

export default ItemCard;