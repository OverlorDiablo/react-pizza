import React from 'react';
import PropTypes from 'prop-types';

export const Categories = React.memo(
  function Categories({ activeCategory, items, onClickCategory }) {

    return (
      < div className="categories" >
        <ul>
          <li
            onClick={() => onClickCategory(null)}
            className={activeCategory === null ? 'active' : ''}>
            Все
          </li>
          {items &&
            items.map((name, index) => (
              <li
                key={`${name}_${index}`}
                onClick={() => onClickCategory(index)}
                className={activeCategory === index ? 'active' : ''}
              >{name}</li>
            ))}
        </ul>
      </div >

    );
  });

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired
};

Categories.defaultProps = { activeCategory: null, items: [] };