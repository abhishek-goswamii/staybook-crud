import React, { useState, useEffect } from "react";

const TextArea = ({ placeholderValue, inputValue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [valueState, setValueState] = useState(inputValue);
  let previousValueBackup = inputValue;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setValueState(previousValueBackup);
    setIsEditing(false);
  };

  const handleUpdateClick = () => {
    previousValueBackup = valueState;
    setIsEditing(false);
  };

  useEffect(() => {
    setValueState(inputValue);
  }, [inputValue]);

  return (
    <div className="flex items-center ml-10 mt-5">
      <p style={{ color: "#275b59", fontWeight: 400 }}>Hotel List : </p>

      {isEditing ? (
        <div className="flex items-center">
          <div className="border-2 rounded-xl h-32 w-96 flex pl-2 ml-3">
            <textarea
              className="h-full"
              style={{
                boxSizing: "border-box",
                outline: "none",
                color: "black",
                resize: "none",
                height: "80px",
                width: "150px",
              }}
              value={valueState}
              onChange={(e) => setValueState(e.target.value)}
            />
          </div>
          <button
            className="ml-2 color-black pl-1 pr-1"
            style={{ backgroundColor: "rgb(255 142 149)" }}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
            className="ml-2 color-black pl-1 pr-1"
            style={{ backgroundColor: "rgb(0 139 134)" }}
            onClick={handleUpdateClick}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="border-2 rounded-xl h-32 w-96 flex pl-2 ml-3">
          <textarea
            className="w-full h-full"
            value={valueState}
            disabled
            style={{
              boxSizing: "border-box",
              outline: "none",
              resize: "none",
              height: "80px",
              width: "150px",
            }}
          />
        </div>
      )}

      {!isEditing && (
        <p
          className="ml-5"
          style={{ color: "#275b59", fontWeight: 400, cursor: "pointer" }}
          onClick={handleEditClick}
        >
          Edit
        </p>
      )}
    </div>
  );
};

export default TextArea;
