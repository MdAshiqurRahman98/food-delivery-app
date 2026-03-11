import { useForm } from "react-hook-form";
import { useContext } from "react";
import ItemContext from "../../../context/ItemContext";

const AddItemModal = ({ setOpen }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { addItem } = useContext(ItemContext);

    const onSubmit = (data) => {
        const newItem = {
            Name: data.name,
            Image: data.image,
        };
        addItem(newItem);
        setOpen(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl w-96">
                <h2 className="text-xl font-semibold mb-4">Add New Item</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <input
                            placeholder="Item Name"
                            className="w-full border p-2 rounded"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            placeholder="Image URL"
                            className="w-full border p-2 rounded"
                            {...register("image", { required: "Image URL is required" })}
                        />
                        {errors.image && (
                            <p className="text-red-500 text-sm">{errors.image.message}</p>
                        )}
                    </div>

                    <button className="bg-orange-500 text-white px-4 py-2 rounded w-full">
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItemModal;