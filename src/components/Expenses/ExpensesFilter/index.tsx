import "./styles.css";

interface ExpensesFilterProps {
  selected: string;
  onChangeFilter: (selectedYear: string) => void;
}

export const ExpensesFilter = (props: ExpensesFilterProps) => {
  function dropdownChangeHandler(event: any) {
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={props.selected}
          onChange={(event) => dropdownChangeHandler(event)}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};
