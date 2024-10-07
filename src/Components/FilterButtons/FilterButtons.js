import './FilterButtons.css'

const FilterButtons = ({ setFilter }) => {
  return (
    <div className='btn-container'>
      <button onClick={() => setFilter("all")}>Todas</button>
      <button onClick={() => setFilter("completed")}>Completadas</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
    </div>
  );
};

export default FilterButtons;
