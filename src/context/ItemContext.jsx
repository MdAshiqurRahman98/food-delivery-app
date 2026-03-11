import { createContext, useEffect, useState } from "react";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchItems = async () => {
        try {
            const res = await fetch(
                "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
            );
            const data = await res.json();
            setItems(data.Items || data.items || []);
        } catch (error) {
            console.error("Error fetching items", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const addItem = (item) => {
        setItems((prev) => [item, ...prev]);
    };

    return (
        <ItemContext.Provider value={{ items, loading, addItem }}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;