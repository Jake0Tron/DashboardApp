// @flow

import React, { useState } from "react";
import { CarouselTile, Loading } from "../";
import "./Carousel.scss";

const getTilesToShow = (tiles, index, numToShow) => {
  // return numToShow number of tiles from index to end

  return tiles.slice(index, index + numToShow);
};

const Carousel = ({ carouselData }) => {
  // TODO: show 3 tiles at a time, iterating through list
  const NUM_TILES = 3;
  const [tileIndex, setTileIndex] = useState(0);
  const [tiles, setTiles] = useState(
    getTilesToShow(carouselData, tileIndex, NUM_TILES)
  );

  const onNextClick = () => {
    let sliceIndex = tileIndex + NUM_TILES;
    if (sliceIndex > carouselData.length - NUM_TILES - 1)
      sliceIndex = carouselData.length - NUM_TILES - 1;
    setTiles(getTilesToShow(carouselData, sliceIndex, NUM_TILES));
    setTileIndex(sliceIndex);
  };

  const onPrevClick = () => {
    let sliceIndex = tileIndex - NUM_TILES;
    if (sliceIndex < 0) sliceIndex = 0;
    setTiles(getTilesToShow(carouselData, sliceIndex, NUM_TILES));
    setTileIndex(sliceIndex);
  };

  return carouselData != null ? (
    <div className="carousel">
      <div className="weatherCarousel">
        {tiles.map((fd) => (
          <CarouselTile tileData={fd} key={fd.dt} />
        ))}
      </div>
      <div className="buttonContainer">
        <button
          className="carouselButton"
          disabled={tileIndex === 0}
          onClick={onPrevClick}
        >
          &lt;
        </button>
        <button
          className="carouselButton"
          disabled={tileIndex === carouselData.length - NUM_TILES - 1}
          onClick={onNextClick}
        >
          &gt;
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Carousel;
