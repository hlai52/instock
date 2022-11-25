// import "./app.scss";
import React, { useState } from "react";
import "./Pages.scss";
import Header from "../components/sections/header/Header";
import AddNewInventoryItem from "../components/sections/addNewInventoryItem/AddNewInventoryItem";
import EditInventoryItem from "../components/sections/editInventoryItem/EditInventoryItem";
import { InventoryList } from "../components/sections/inventoryList/InventoryList";

const Inventories = () => {
  const [displayAdd, setDisplayAdd] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showList, setShowList] = useState(true);
  return (
    <>
      <div className="main">
        <Header
          setShowList={setShowList}
          setDisplayAdd={setDisplayAdd}
          setShowDetails={setShowDetails}
          setDisplayEdit={setDisplayEdit}
        />
        <div className="components">
          {showList && (
            <InventoryList
              setDisplayAdd={setDisplayAdd}
              setDisplayEdit={setDisplayEdit}
              setShowList={setShowList}
              setShowDetails={setShowDetails}
            />
          )}

          {displayAdd && (
            <AddNewInventoryItem
              setShowList={setShowList}
              setDisplayAdd={setDisplayAdd}
            />
          )}
          {displayEdit && (
            <EditInventoryItem
              setShowDetails={setShowDetails}
              setDisplayEdit={setDisplayEdit}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Inventories;
