// ------------
// Shows Row UI
// ------------

// components
import BookmarkIcon from "./BookmarkIcon";
import MediaInfoWrapper from "./MediaInfoWrapper";
import { ScrollBtn } from "./ScrollBtn";
// react
import { useContext, useRef } from "react";
// context
import { ScrollContext } from "../../context/Context-Config";

export default function ShowsRow(props) {
  const ref = useRef();
  const scrollStep = useContext(ScrollContext);

  return (
    <div className="ShowsTemplate">
      <h2>{props.showsCategory}</h2>

      <div className="ShowsTemplate__row" ref={ref}>
        <ScrollBtn ref={ref} type="left" scrollStep={scrollStep} />
        {props.shows.map((show) => {
          return (
            <div className="ShowsTemplate__row__card" key={show.id}>
              <img
                className="ShowsTemplate__row__card__img"
                src={`${props.configs[0]?.images.secure_base_url}${props.configs[0]?.images.profile_sizes[1]}${show.poster_path}`}
                alt="show img"
              />
              <BookmarkIcon el={show} collectionID={props.collectionID} />
              <MediaInfoWrapper el={show} />
            </div>
          );
        })}
        <ScrollBtn ref={ref} type="right" scrollStep={scrollStep} />
      </div>
    </div>
  );
}
