import { useDispatch, useSelector } from "react-redux";

import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

import { useId } from "react";

import css from "./SearchBox.module.css";

import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SearchBox() {
  const dispatch = useDispatch();

  const id = useId();

  const handleClearInput = () => {
    dispatch(changeFilter(""));
  };

  const value = useSelector(selectNameFilter);

  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <div className={css.inputWrapper}>
        <input
          className={css.search}
          id={id}
          type="text"
          value={value}
          onChange={(evt) => {
            dispatch(changeFilter(evt.target.value));
          }}
        />
        <button
          className={css.closeBtn}
          type="button"
          onClick={handleClearInput}
        >
          <AiOutlineCloseCircle size={16} />
        </button>
      </div>
    </div>
  );
}
