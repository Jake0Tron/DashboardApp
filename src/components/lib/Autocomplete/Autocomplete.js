import React, { useEffect, useState } from "react";
import "./Autocomplete.scss";

const AutoComplete = () => {
  const [autocompleteValues, setAutocompleteValues] = useState([]),
    [filteredValues, setFilteredValues] = useState([]),
    [inputText, setInputText] = useState(""),
    [dropDownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // fetch data from endpoint or elsewhere
    setAutocompleteValues([
      "test",
      "abc",
      "abcd",
      "bca",
      "abcdefghijklmost",
      "dsfg",
      "qwert",
      "rtyu",
      "zxcv",
      "fghjk",
      "?!@$%",
    ]);
  }, []);

  const onInputChange = (val) => {
    setInputText(val);
    getFilteredAutoCompleteValues(val);
  };

  const getFilteredAutoCompleteValues = (str) => {
    // TODO determine filter logic, are we looking for regex-esque filtering? Substring filtering?
    const val = autocompleteValues.filter((v) => v.includes(str));
    if (val.length > 0) setDropdownOpen(true);
    setFilteredValues(val);
  };

  const onDropdownValueClick = (val) => {
    setInputText(val);
    setDropdownOpen(false);
  };

  return (
    <div>
      <input
        type="string"
        placeholder="Enter a value..."
        value={inputText}
        onChange={(e) => onInputChange(e.target.value)}
      />
      {inputText.length > 0 && dropDownOpen ? (
        <div className="dropdown" hidden={!dropDownOpen}>
          {filteredValues.length > 0 ? (
            filteredValues.map((val) => (
              <div
                className="dropdownValue"
                key={val}
                onClick={() => onDropdownValueClick(val)}
              >
                {val}
              </div>
            ))
          ) : (
            <div>No values found.</div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default AutoComplete;
