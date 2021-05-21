import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Cards({ sprite, name, id, saveCard }) {
  const [inProp, setInProp] = useState(false);

  return (
    <div className="cards" onClick={() => setInProp(true)}>
      <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <div
          id="Cards"
          className="nes-pointer nes-container with-title is-centered is-rounded"
          onClick={() => saveCard(id)}
        >
          <p className="title">{name}</p>
          <img className="sprite" src={sprite} alt="" />
        </div>
      </CSSTransition>
    </div>
  );
}
