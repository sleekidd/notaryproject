import React, { useState } from 'react';

const Dropdown = ({ items, onChange, color = 'black', width = 'auto', style = {} }) => {
  const [selectedItem, setSelectedItem] = useState(items[0] ? items[0].language : null);

  const handleSelect = (e) => {
    const selectedItemValue = e.target.value;
    setSelectedItem(selectedItemValue);
    onChange(selectedItemValue);
  };

  return (
    <select
      onChange={handleSelect}
      value={selectedItem}
      style={{ color, width, ...style }}
    >
      {items.map((item, index) => (
        <option key={index} value={item.language}>
          <img src={item.flag} alt={item.language} style={{ width: '20px', marginRight: '5px' }} /> {item.language}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
