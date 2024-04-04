import { useDispatch, useSelector } from 'react-redux';
import { useId } from 'react';
import {
  changeNameFilter,
  changeNumberFilter,
} from '../../redux/filters/slice';
import {
  selectNameFilter,
  selectNumberFilter,
} from '../../redux/filters/selectors';
import css from '../SearchBox/SearchBox.module.css';

function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);
  const filterNumber = useSelector(selectNumberFilter);

  return (
    <form className={css.form}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        name="searchQuery"
        id={searchId}
        className={css.search}
        value={filterName}
        onChange={(e) => {
          dispatch(changeNameFilter(e.target.value));
        }}
      />
      <p className={css.text}>Find contacts by number</p>
      <input
        type="text"
        name="searchQuery"
        id={searchId}
        className={css.search}
        value={filterNumber}
        onChange={(e) => {
          dispatch(changeNumberFilter(e.target.value));
        }}
      />
    </form>
  );
}

export default SearchBox;
