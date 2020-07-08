import React from "react";

const filters = ["all", "active", "completed"];

const TodoFilter = ({ filter, handleFilter }) => {
  const onClick = (e, filter) => {
    e.preventDefault();
    handleFilter(filter);
  };

  return (
    <ul className="filters">
      {filters.map(eachFilter => {
        const className = filter === eachFilter ? "selected" : "";
        return (
          <li key={eachFilter}>
            <a
              href={eachFilter}
              className={className}
              onClick={event => onClick(event, eachFilter)}
            >
              {eachFilter}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoFilter;
