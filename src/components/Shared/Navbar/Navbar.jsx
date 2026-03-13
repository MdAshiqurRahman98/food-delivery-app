import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import AddItemModal from '../../items/AddItemModal/AddItemModal';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-2xl font-bold text-gray-800">
            pti<span className="text-orange-500">.</span>
          </h1>

          {/* Search (hidden on very small screens) */}
          <div className="hidden sm:block flex-1 mx-4">
            <input
              type="text"
              placeholder="Search Audiobook"
              className="w-full bg-gray-100 px-4 py-2 rounded-lg outline-none"
            />
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-1 bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium"
          >
            MENU
            <FiChevronDown />
          </button>
        </div>

        {/* Dropdown */}
        {menuOpen && (
          <div className="bg-white shadow-md px-4 py-2 space-y-2 text-gray-600 text-sm">
            <p className="text-orange-500 font-medium">Home</p>
            <p>Details</p>
            <p>Category</p>
            <p>My Favorites</p>
            <p>Profile</p>
            <p>Log In/Sign Up</p>

            <button
              onClick={() => {
                setModalOpen(true);
                setMenuOpen(false);
              }}
              className="mt-2 w-full bg-orange-500 text-white py-2 rounded-lg"
            >
              Add Item
            </button>
          </div>
        )}
      </div>

      {modalOpen && <AddItemModal setOpen={setModalOpen} />}
    </>
  );
};

export default Navbar;