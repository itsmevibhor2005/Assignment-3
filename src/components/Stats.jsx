import React,{useEffect} from "react";

const Stats = ({name, appearance, biography, connections, power, work
}) => {
    
    
  return (
    <div className="flex flex-col justify-center items-center w-[95vw]">
      <div className="text-3xl font-semibold">{name}</div>

      <div className="flex w-[90vw] border border-black my-3">
            <div className="w-[19vw] p-2 border border-black">
                <div className="text-2xl font-semibold underline text-center my-3">
                Appearance
                </div>
                <div className="flex justify-around my-2">
                <span className="underline font-semibold text-xl w-[100px]">Gender:</span>
                <span className="text-xl w-[100px]">{appearance.gender}</span>
                </div>
                <div className="flex justify-around my-2">
                <span className="underline font-semibold text-xl w-[100px]">Race:</span>
                <span className="text-xl w-[100px]">{appearance.race}</span>
                </div>
                <div className="flex justify-around my-2">
                <span className="underline font-semibold text-xl w-[100px]">Height:</span>
                <span className="text-xl w-[100px]">{appearance.height[1]}</span>
                </div>
                <div className="flex justify-around my-2">
                <span className="underline font-semibold text-xl w-[100px]">Weight:</span>
                <span className="text-xl w-[100px]">{appearance.weight[1]}</span>
                </div>
                <div className="flex justify-around my-2">
                <span className="underline font-semibold text-xl w-[100px]">Eye-Color:</span>
                <span className="text-xl w-[100px]">{appearance["eye-color"]}</span>
                </div>
                <div className="flex justify-around my-2">
                <span className="underline font-semibold text-xl w-[100px]">Hair-Color:</span>
                <span className="text-xl w-[100px]">{appearance["hair-color"]}</span>
                </div>
                
                
            </div>

    
        
        <div className="w-[19vw] p-2 border border-black">
          <div className="text-2xl font-semibold underline text-center my-3">
            Biography
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[100px]">Full Name:</span>
            <span className="text-xl w-[100px]">{biography["full-name"]}</span>
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[100px]">Alter Egos:</span>
            <span className="text-xl w-[100px]">{biography["alter-egos"]}</span>
          </div>
          
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[100px]">Place of Birth:</span>
            <span className="text-xl w-[100px]">{biography["place-of-birth"]}</span>
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[100px]">First Appearance:</span>
            <span className="text-xl w-[100px]">{biography["first-appearance"]}</span>
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[100px]">Publisher:</span>
            <span className="text-xl w-[100px]">{biography.publisher}</span>
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[100px]">Alignment:</span>
            <span className="text-xl w-[100px]">{biography.alignment}</span>
          </div>
        </div>
        <div className="w-[19vw] p-2 border border-black">
          <div className="text-2xl font-semibold underline text-center my-3">
            Connections
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[100px]">Group affiliation:</span>
            <span className="text-xl w-[150px]">{connections["group-affiliation"]}</span>
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[100px]">Relatives:</span>
            <span className="text-xl w-[150px]">{connections.relatives}</span>
          </div>
          
        </div>
        <div className="w-[19vw] p-2 border border-black">
          <div className="text-2xl font-semibold underline text-center my-3">
            Power-Stats
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[100px]">Intelligence:</span>
            <span className="text-xl w-[100px]">{power.intelligence}</span>
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[100px]">Strength:</span>
            <span className="text-xl w-[100px]">{power.strength}</span>
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[100px]">Speed:</span>
            <span className="text-xl w-[100px]">{power.speed}</span>
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[100px]">Durability:</span>
            <span className="text-xl w-[100px]">{power.durability}</span>
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[100px]">Power:</span>
            <span className="text-xl w-[100px]">{power.power}</span>
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[100px]">Combat:</span>
            <span className="text-xl w-[100px]">{power.combat}</span>
          </div>
          
        </div>
        <div className="w-[19vw] p-2 border border-black">
          <div className="text-2xl font-semibold underline text-center my-3">
            Work
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[120px]">Occupation:</span>
            <span className="text-xl w-[150px]">{work.occupation}</span>
          </div>
          <div className="flex justify-around my-2">
            <span className="underline font-semibold text-xl w-[120px]">Base:</span>
            <span className="text-xl w-[150px]">{work.base}</span>
          </div>
          
          
        </div>
        
      </div>
    </div>
  );
};

export default Stats;
