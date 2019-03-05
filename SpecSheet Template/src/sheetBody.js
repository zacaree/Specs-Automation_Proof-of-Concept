import React from "react";

const sheetBody = props => {
  const { product } = props;
  console.log(product);
  // console.log(Object.keys(product));
  // const decks = Object.keys(product).filter(key => key.includes("deck"));
  const keys = Object.keys(product);
  const print = keys.forEach(key => console.log(key + ": " + product[key]));
  console.log(print);
  return (
    <div className="sheetBody">
      <div className="specs-wrap">
        <div className="specColumn">
          <hr />
          <h3>Engine</h3>
          <div className="columnGrid">
            <p>Manufacturer</p>
            <p>
              {product.engineManufacturer} {product.engineModel}
            </p>
            <p>HP</p>
            <p>{product.engineHorsepower} *Per SAE J 1995</p>
            <p>Displacement</p>
            <p>{product.engineDisplacement}</p>
            <p>Cooling</p>
            <p>{product.engineCooling}</p>
            <p>Air Cleaner</p>
            <p>{product.engineAirCleaner} (not standard on 36” deck)</p>
            <p>Engine Warranty</p>
            <p>{product.engineWarranty}</p>
          </div>

          <hr />
          <h3>Drive System</h3>
          <div className="columnGrid">
            <p>Type</p>
            <p>{product.driveSystemType}</p>
            <p>Pumps</p>
            <p>{product.driveSystemPumps}</p>
            <p>Wheel Motors</p>
            <p>{product.driveSystemWheelMotors}</p>
            <p>Speed</p>
            <p>Up to {product.driveSystemSpeed}</p>
            <p>Parking Brakes</p>
            <p>{product.driveSystemParkingBrake}</p>
          </div>

          <hr />
          <h3>Decks</h3>
          <div className="columnGrid">
            <p>Cutting Width</p>
            <p>{product.deckCuttingWidth}</p>
            <p>Cutting Heights</p>
            <p>{product.deckCuttingHeights}</p>
            <p>Deck Lift</p>
            <p>{product.deckLift}</p>
            <p>Depth</p>
            <p>{product.deckDepth}</p>
            <p>Blades</p>
            <p>{product.deckBlades}</p>
            <p>Blade Length</p>
            <p>{product.deckBladeLength}</p>
            <p>Spindles</p>
            <p>{product.deckSpindles}</p>
            <p>Deck Belts</p>
            <p>{product.deckBelts}</p>
            <p>Drive</p>
            <p>{product.deckDrive}</p>
            <p>Construction</p>
            <p>{product.deckConstruction}</p>
            <p>Spindle Mounts</p>
            <p>{product.deckSpindleMounts}</p>
            <p>Impact/Trim Areas</p>
            <p>{product.deckImpactAreas}</p>
          </div>
        </div>

        <div className="specColumn">
          <hr />
          <h3>Construction</h3>
          <div className="columnGrid">
            <p>Frame</p>
            <p>{product.constructionFrame}</p>
            <p>Engine Plate</p>
            <p>{product.constructionEnginePlate}</p>
            <p>Front Caster Wheels</p>
            <p>{product.constructionFrontCasterWheels}</p>
            <p>Front Caster Forks</p>
            <p>{product.constructionFrontCasterForks}</p>
            <p>Operator Platform</p>
            <p>{product.constructionOperatorPlatform}</p>
          </div>

          <hr />
          <h3>General</h3>
          <div className="columnGrid">
            <p>Fuel Capacity</p>
            <p>36”: 6.5 galllons 48, 52, 60”: 7.3 gallons</p>
            <p>Front Tire</p>
            <p>36”: 11 x 4 semi pneumatic48”, 52”, 60”: 13 x 5 semi pneumatic</p>
            <p>Drive Tire</p>
            <p>36”: 18 x 8.5 - 1048”, 52”: 20 x 10 - 1060”: 20 x 12 - 10</p>
          </div>

          <hr />
          <h3>Dimensions</h3>
          <div className="columnGrid">
            <p>Weight</p>
            <p>36”: 910 lbs 48”: 1040 lbs52”: 1055 lbs 60”: 1110 lbs</p>
            <p>Height</p>
            <p>47.8”</p>
            <p>Length</p>
            <p>36”: 63.5” 48”, 52”: 64”60”: 66.5”</p>
            <p>Width w/ chute up</p>
            <p>36”: 39” 48”: 50.4” 52”: 54.4” 60”: 62.4”</p>
            <p>Tire Width</p>
            <p>36”: 36.3” 48”, 52”: 44.7” 60”: 49.1”</p>
          </div>

          <hr />
          <h3>Productivity</h3>
          <div className="columnGrid">
            <p>Acres Per Hour*</p>
            <p>36”: 2.33 48”: 3.4952”: 3.93 60”: 4.36</p>
            <p>Optional Accessories</p>
            <p>Mulch kit Grass catcher (4.4 cu.ft.) Light kit Cup holder Trash basket Stripe kit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sheetBody;
