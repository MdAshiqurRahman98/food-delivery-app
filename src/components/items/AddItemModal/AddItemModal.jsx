import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addItem } from "../../../features/items/itemSlice";

const AddItemModal = ({ setOpen }) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(
            addItem({
                Name: data.name,
                Image: data.image,
            })
        );

        setOpen(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl w-96">
                <h2 className="text-xl font-semibold mb-4">Add Item</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        placeholder="Item Name"
                        className="border p-2 w-full rounded"
                        {...register("name", { required: "Name required" })}
                    />

                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}

                    <input
                        placeholder="Image URL"
                        className="border p-2 w-full rounded"
                        {...register("image", { required: "Image required" })}
                    />

                    {errors.image && (
                        <p className="text-red-500 text-sm">{errors.image.message}</p>
                    )}

                    <button className="bg-orange-500 text-white w-full py-2 rounded">
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItemModal;