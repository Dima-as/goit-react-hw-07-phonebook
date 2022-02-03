import s from "./Filter.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts-selector";
import { filterContacts } from "../../redux/contact-action";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilterInputValue = (e) => dispatch(filterContacts(e.target.value));
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        placeholder="Rosie Simpson"
        type="text"
        value={value}
        onChange={onFilterInputValue}
      />
    </label>
  );
}
