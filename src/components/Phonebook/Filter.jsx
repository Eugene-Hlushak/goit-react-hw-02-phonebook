import PropTypes from 'prop-types';

export default function Filter({ handleChange }) {
  return (
    <label>
      Find contact by name
      <input type="text" name="filter" onChange={handleChange} />
    </label>
  );
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
