import React, { useState } from "react";
import { CarouselTile, Loading } from "../";
import "./Carousel.scss";

const getTilesToShow = (tiles, index, numToShow) => {
  // return numToShow number of tiles from index to end

  return tiles.slice(index, index + numToShow);
};

const NUM_TILES = 3;
const Carousel = ({ carouselData, tileCount = NUM_TILES }) => {
  const [tileIndex, setTileIndex] = useState(0);
  const [tiles, setTiles] = useState(
    getTilesToShow(carouselData, tileIndex, tileCount)
  );

  const onNextClick = () => {
    let sliceIndex = tileIndex + tileCount;
    if (sliceIndex > carouselData.length - tileCount - 1)
      sliceIndex = carouselData.length - tileCount - 1;
    setTiles(getTilesToShow(carouselData, sliceIndex, tileCount));
    setTileIndex(sliceIndex);
  };

  const onPrevClick = () => {
    let sliceIndex = tileIndex - tileCount;
    if (sliceIndex < 0) sliceIndex = 0;
    setTiles(getTilesToShow(carouselData, sliceIndex, tileCount));
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
          disabled={tileIndex === carouselData.length - tileCount - 1}
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
