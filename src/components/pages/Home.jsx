import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../index';
import { fetchPizzas } from '../../redux/actions/pizzas';
import { setCategory, setSortBy } from '../../redux/actions/filters';
import { addPizzaToCart } from '../../redux/actions/cart';

export function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'name' },
  ];

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, []);

  const handleAddPizzaToCart = obj => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj
    });
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy}
          onClickSortType={onSelectSortType}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock
            onClickAddPizza={handleAddPizzaToCart}
            key={obj.id}
            addedCount={cartItems[obj.id] && cartItems[obj.id].length}
            {...obj} />)
          : Array(12)
            .fill(0)
            .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}
