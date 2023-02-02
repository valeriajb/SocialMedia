import React from "react";
import "./HistoryCards.css";
import { IoMdAdd } from "react-icons/io";


function HistoryCards({ name, listImages }) {
  return (
    <div className="container-historyCards">
      {listImages.map((image) =>
        <div key={image.id} className="historyCard">
          <img
            src={image.img}
            alt=""
            className="image-historyCard"
          />
          {image.name ? (
            <span className="stateHistory spanName">{image.name}</span>
          ) : (
            <div className="circle-more stateHistory">
              <IoMdAdd className="iconAdd" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HistoryCards;
