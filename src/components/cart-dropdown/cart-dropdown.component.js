import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.component.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;