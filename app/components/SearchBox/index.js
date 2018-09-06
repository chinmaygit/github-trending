import React from 'react';
import PropTypes from 'prop-types';
import SearchItem from './searchItem';

const SearchBox = props => (
  <div className="card">
    <div className="card-header">
      <div className="input-group">
        <input
          type="text"
          value={props.language}
          className="form-control"
          onChange={props.onSearchText}
          placeholder="Search by language"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary"
            type="button"
            id="button-addon2"
            onClick={props.onSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div className="card-body" style={Style.cardBody}>
      {props.error ? (
        <div className="card" style={{ margin: 16 }}>
          <div className="card-body" style={{}}>
            <span>{props.error}</span>
          </div>
        </div>
      ) : (
        props.repositories.map(item => (
          <SearchItem
            url={item.url}
            name={item.name}
            description={item.description}
            stars={item.stars}
            forks={item.forks}
          />
        ))
      )}
    </div>
    {props.loading ? (
      <div style={Style.loaderContainer}>
        <div className="d-flex align-items-center flex-column justify-content-center">
          <div style={{ marginTop: 100 }}>
            <span className="flex-grow-1">Loading...</span>
          </div>
        </div>
      </div>
    ) : null}
  </div>
);

SearchBox.propTypes = {
  onSearch: PropTypes.func,
  onSearchText: PropTypes.func,
  repositories: PropTypes.array,
  language: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const Style = {
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    zIndex: 2,
  },
  cardBody: {
    padding: 0,
    minHeight: 300,
  },
};

export default SearchBox;
