import React, { useState, useEffect } from "react";

import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const CheckBox = ({ name, value, data_name, collection_name, docId }) => {
  const [localValue, setLocalValue] = useState(value || false);

  console.log(localValue, value);

  useEffect(() => {
    setLocalValue(value || false);
  }, [value]);

  const handleCheckboxChange = async (newValue) => {
    const docRef = doc(db, collection_name, docId);

    try {
      await updateDoc(docRef, {
        [data_name]: newValue,
      });

      setLocalValue(newValue);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center justify-self-start">
      <p className="pr-3 w-40" style={{ color: "#275b59" }}>
        {name} :
      </p>
      <div className="border-2 rounded-xl p-2 w-48 h-16 flex justify-around items-center">
        <label className="text-black">
          Yes
          <input
            className="ml-1"
            type="checkbox"
            checked={localValue}
            onChange={() => handleCheckboxChange(true)}
          />
        </label>

        <label className="text-black ml-2">
          No
          <input
            className="ml-1"
            type="checkbox"
            checked={!localValue}
            onChange={() => handleCheckboxChange(false)}
          />
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
