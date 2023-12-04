import React from "react";
import CheckBox from "./checkBox";
import InputField from './inputField'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useState,useEffect } from "react";

const Attributes = () => {
  
    const [data, setData] = useState()

    
  useEffect(() => {
    const fetchData = async () => {
      const value = collection(db, "Attributes");
      const querySnapshot = await getDocs(value);

      if (!querySnapshot.empty) {
        const firstDocData = querySnapshot.docs[0].data();
        console.log(firstDocData);
        setData(firstDocData);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <div className="mt-5">
        <p
          className="ml-7 text-black pt-5 pb-5 font-semibold"
          style={{ color: "#275b59" }}
        >
          Deluxe Room
        </p>

        <div className="flex flex-row">
          <div className="ml-9 pt-7 pb-9 pl-12 pr-12 border-2 border-dashed flex flex-col items-center justify-center">
            <img src="/images/image-icon.png" alt="logo" className="w-15" />
            <p className="text-black">Add Image</p>
          </div>

          <div className="flex flex-col justify-end">
            <div className="border-2 rounded-xl h-11 flex pl-2 ml-3">
              <input
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  color: "black",
                }}
                className="w-96"
                placeholder="Image Logo URL"
                value={data?.logo_url ?? null}
              />
            </div>
            <div className="mt-3 border-2 rounded-xl h-11 flex pl-2 ml-3">
              <input
                style={{
                  boxSizing: "border-box",
                  outline: "none",
                  color: "black",
                }}
                className=""
                placeholder="Image URL"
                value={data?.image_url ?? null}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-8 pl-10 mt-20">
        <CheckBox
        
          name="Air conditioner"
          value={data?.air_conditionerd ?? false}
        />
        <CheckBox name="Hot tub" value={data?.hot_tub ?? false} />
        <CheckBox name="Bar Lounge" value={data?.bar_and_lounge ?? false} />
        <CheckBox
          name="Spa"
          value={data?.spa ?? false}
        />
        <CheckBox
        
          name="Air conditioner"
          value={data?.air_conditionerd ?? false}
        />
        <CheckBox name="Hot tub" value={data?.hot_tub ?? false} />
        <CheckBox name="Bar Lounge" value={data?.bar_and_lounge ?? false} />
        <CheckBox
          name="Spa"
          value={data?.spa ?? false}
        />
        <CheckBox
        
          name="Air conditioner"
          value={data?.air_conditionerd ?? false}
        />
        <CheckBox name="Hot tub" value={data?.hot_tub ?? false} />
        <CheckBox name="Bar Lounge" value={data?.bar_and_lounge ?? false} />
        <CheckBox
          name="Spa"
          value={data?.spa ?? false}
        />
        <CheckBox
        
          name="Air conditioner"
          value={data?.air_conditionerd ?? false}
        />
        <CheckBox name="Hot tub" value={data?.hot_tub ?? false} />
        <CheckBox name="Bar Lounge" value={data?.bar_and_lounge ?? false} />
        <CheckBox
          name="Spa"
          value={data?.spa ?? false}
        />
        <CheckBox
        
          name="Air conditioner"
          value={data?.air_conditionerd ?? false}
        />
        <CheckBox name="Hot tub" value={data?.hot_tub ?? false} />
        <CheckBox name="Bar Lounge" value={data?.bar_and_lounge ?? false} />
        <CheckBox
          name="Spa"
          value={data?.spa ?? false}
        />
        <CheckBox name="Bar Lounge" value={data?.bar_and_lounge ?? false} />
        <CheckBox
          name="Spa"
          value={data?.spa ?? false}
        />
      </div>

     <InputField placeholderValue='No payment require' inputValue={data?.parking_type ?? false}/>

    </div>
  );
};

export default Attributes;
