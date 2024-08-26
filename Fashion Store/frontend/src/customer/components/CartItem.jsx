import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import MinimizeIcon from "@mui/icons-material/Minimize";
const CartItem = () => {
  return (
    <div className="relative p-5 shadow-md border-2 border-indigo-600 rounded-md">
      <MinimizeIcon
        sx={{
          position: "absolute",
          top: 12,
          right: 10,
          color: "black",
          fontSize: "large",
        }}
      />
      <IconButton
        sx={{ position: "absolute", top: 14, right: 24, color: "red" }}
      >
        <RemoveShoppingCartIcon fontSize="small" />
      </IconButton>
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] border-2 border-indigo-600 rounded-sm">
          <img
            className="w-full h-full object-cover object-top rounded-sm"
            src="https://outfitters.com.pk/cdn/shop/files/F0526206634.jpg?v=1716963336"
            alt=""
          />
        </div>
        <div className="ml-5 text-left space-y-1">
          <p className="font-normal -mb-1 text-lg">Basic Tee 6 Pack</p>
          <p className="opacity-80 text-sm tracking-tight">
            Black, White & Grey
          </p>
          <p className="text-xs opacity-80 mt-2">Hand-crafted, 100% cotton.</p>
          <div className="flex items-center pb-1">
            <span className="px-4 border rounded-sm">3</span>
            <IconButton sx={{ marginRight: -0.5, marginLeft: 1.6 }}>
              <RemoveCircleOutlineIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ color: "#6F46E5", marginLeft: -0.1 }}>
              <AddCircleOutlineIcon fontSize="small" />
            </IconButton>
          </div>
          <div className="flex space-x-5 items-center text-sm lg:text-sm text-gray-900">
            <p className="text-gray-800 line-through">PKR 1999</p>
            <span className="text-gray-900 px-1 rounded-sm bg-yellow-300 relative">
              799
              <span className="text-xs -ml-5 text-black">&emsp;&emsp;-10%</span>
            </span>
          </div>
        </div>
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:space-x-4"></div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
