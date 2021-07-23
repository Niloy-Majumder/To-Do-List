import React from "react";

function List(props) {
  return (
    <div>
      <li>
        {props.text}{" "}
        <span
          onClick={() => {
            props.onClicked(props.id);
          }}
          style={{ marginLeft: "100px" }}
        >
          <button>Done</button>
        </span>
      </li>
    </div>
  );
}

export default List;
