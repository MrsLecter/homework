import React from "react";

const filters = ["all", "active", "completed"];

class TodoFilter extends React.Component{
  
  handleFilter(event, filter){
    event.preventDefault();
    //console.log(filter);
    this.props.onFilter(filter);
  }

  render(){
    return(
      <ul className="filters">
      {filters.map(eachFilter => {
        const className = this.props.filter === eachFilter ? "selected" : "";
        return (
          <li key={eachFilter}>
            <a
              href={eachFilter}
              className={className}
              onClick={(e) => this.handleFilter(e,eachFilter)}
            >
              {eachFilter}
            </a>
          </li>
        );
      })}
    </ul>
    )
  }
}

export default TodoFilter;
