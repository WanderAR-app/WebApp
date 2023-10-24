import React, { useState, useRef, useEffect } from 'react';
import '../style.css';

interface Props {
  options: string[];
}

const SwitchMultiChoice: React.FC<Props> = ({ options }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef(null);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  useEffect(() => {
    setSelectedOption(options[0]);
  }, [options]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', position: 'relative', width: '100%' }}>
      <div style={{ flex: 1 }}>
        <div className="SwitchMultiChoiceContainer">
          {showOptions && (
            <div
              className="DropdownList"
              ref={dropdownRef}
              onBlur={() => setShowOptions(false)}
            >
              <select
                size={options.length}
                value={selectedOption}
                onChange={(e) => handleOptionClick(e.target.value)}
              >
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            className="DualButtonMultiChoice"
            onClick={handleToggleOptions}
          >
            {selectedOption}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwitchMultiChoice;