import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { ColumnSort, TermsFilter } from '../../const';
import { useAppDispatch } from '../../hooks/main';
import { filtered } from '../../store/action';
import './filter.css';

function Filter(): JSX.Element {
  const [columnFilter, setColumnFilter] = useState<string>(ColumnSort.Date);
  const [termsFilter, setTermsFilter] = useState<string>(TermsFilter.Equals);
  const valueInput = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleChangeColumn = (evt: ChangeEvent<HTMLSelectElement>) => {
    setColumnFilter(String(evt.target.value));
  };

  const handleChangeTerms = (evt: ChangeEvent<HTMLSelectElement>) => {
    setTermsFilter(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    //из валидации сделала только проверку на пустое поле input
    if (valueInput.current?.value !== '') {
      const value = String(valueInput.current?.value);
      dispatch(filtered({columnFilter, termsFilter, value}));
    } else {
      toast('Введите значение для сравнения');
    }


  };

  return (
    <div className='filter-block'>
      <p>Фильтр</p>
      <form className="form-filter" id="form-filter" onSubmit={handleFormSubmit}>
        <select className='select-filter' onChange={handleChangeColumn}>
          <option value={ColumnSort.Date}>{ColumnSort.Date}</option>
          <option value={ColumnSort.Name}>{ColumnSort.Name}</option>
          <option value={ColumnSort.Distance}>{ColumnSort.Distance}</option>
          <option value={ColumnSort.Quantity}>{ColumnSort.Quantity}</option>
        </select>
        <select className='select-filter' onChange={handleChangeTerms}>
          <option value={TermsFilter.Equals}>равно</option>
          <option value={TermsFilter.Contains}>содержит</option>
          <option value={TermsFilter.Bigger}>больше</option>
          <option value={TermsFilter.Smaller}>меньше</option>
        </select>
        <input className="input-filter"
          id="value" type="text" autoComplete="off"
          ref={valueInput}
          placeholder="введите сравнение"
        />
        <label className="visually-hidden" htmlFor="value"></label>
        <button className="button-submit" type="submit">
          Применить
        </button>
      </form>
    </div>
  );
}

export default Filter;
