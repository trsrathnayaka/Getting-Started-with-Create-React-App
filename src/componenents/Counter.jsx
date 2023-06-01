import React from "react";

function Counter() {
  return <div>
    <div className="flex items-center justify-center text-2xl">
      Quantity
    
      <div className="ml-5 shadow-md flex">
      
<div className="bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-1-md">
 -
</div>
<div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
  1
</div>
<div className="bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md">
  + 
</div>
      </div>
    </div>
  </div>;
    
}
export default Counter;