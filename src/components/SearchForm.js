import Search from './Icons/Search';
import './SearchForm.css';

function SearchForm() {
  return (
    <>
      <div className="Search-form-wrapper">
          <div className="Search-form-button">
              <Search class="Search-form-button-img" />
          </div>
          <div className="Search-form-field">
              <input className="Search-form-field-input" aria-autocomplete="list" aria-label="Поисковый запрос" autocapitalize="sentences" autocomplete="off" autocorrect="off" placeholder="Поиск в Твиттере" role="combobox" spellcheck="false" enterkeyhint="search" type="text" dir="auto" value=""></input>
          </div>
      </div>
    </>
  );
}

export default SearchForm