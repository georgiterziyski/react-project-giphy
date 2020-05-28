import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const GifDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [quantity, setQuantity] = useState(10);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Брой резултати: {quantity}
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={e => setQuantity(10)}>10</DropdownItem>
        <DropdownItem onClick={e => setQuantity(20)}>20</DropdownItem>
        <DropdownItem onClick={e => setQuantity(30)}>30</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default GifDropdown;