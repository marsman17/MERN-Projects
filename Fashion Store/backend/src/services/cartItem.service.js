const userService = require("../services/user.service.js");

async function updateCartItem(userId, cartItemId, cartItemData) {
  console.log(userId, cartItemId, cartItemData);
  try {
    const item = await findCartItemById(cartItemId);
    if (!item) {
      throw new Error("Cart item not found: ", cartItemId);
    }
    const user = await userService.findUserById(item.userId);
    console.log("Item user ", user);
    if (!user) {
      throw new Error("User not found: ", userId);
    }
    console.log("Item ", item.product);
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;
      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("You cannot update this cart item.");
    }
  } catch (error) {
    throw new Error(error.message);
  }
  async function removeCartItem(userId, cartItemId) {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(userId);
    console.log(user._id.toString(), cartItem.userid.toString());
    if (user._id.toString() === cartItem.userId.toString()) {
      return await cartItem.findByIdAndDelete(cartItemId);
    }
    throw new error("You cannot remove another user's item.");
  }
  async function findCartItemById(cartItemId) {
    const cartItem = await CartItem.findById(cartItemId).populate("product");
    if (cartItem) {
      return cartItem;
    } else {
      throw new Error("Cart item not found with ID: ", cartItemId);
    }
    module.exports = {
      updateCartItem,
      removeCartItem,
      findCartItemById,
    };
  }
}
