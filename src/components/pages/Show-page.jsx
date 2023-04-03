// ---------
// Show Page
// ---------

//  imports
// react
import { useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
// context
import { MoviesDataContext } from "../../context/Context-Config";
import { TvDataContext } from "../../context/Context-Config";

export default function ShowPage(props) {
  const id = useParams();
  const location = useLocation();
  const movies = useContext(MoviesDataContext);
  const tv = useContext(TvDataContext);

  console.log(location.state.el);
  console.log(location.state);

  return (
    <div className="ShowPage">
      <div className="ShowPage__poster"></div>
      <div className="ShowPage__title"></div>
    </div>
  );
}
