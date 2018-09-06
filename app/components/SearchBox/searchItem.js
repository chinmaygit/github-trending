import React from 'react';
import PropType from 'prop-types';

const SearchItem = props => (
  <a href={props.url} target="_blank" className="card" style={{ margin: 16 }}>
    <div className="card-body" style={{}}>
      <div className="media">
        <div style={{ marginRight: 15 }}>
          <i
            className="fab fa-github"
            style={{ fontSize: 30, color: '#555' }}
          />
        </div>
        <p className="media-body small">
          <strong className="d-block text-gray-dark">{props.name}</strong>
          {props.description}
        </p>
      </div>

      <div className="row" style={{ marginLeft: 1 }}>
        <div className="">
          <i className="far fa-star" style={{ fontSize: 15, color: '#000' }} />
        </div>

        <div className="" style={{ marginLeft: 5 }}>
          <span style={{ fontSize: 12, color: '#555' }}>{props.stars}</span>
        </div>

        <div className="" style={{ marginLeft: 16 }}>
          <i
            className="fas fa-code-branch"
            style={{ fontSize: 15, color: '#000' }}
          />
        </div>

        <div className="" style={{ marginLeft: 5 }}>
          <span style={{ fontSize: 12, color: '#555' }}>{props.forks}</span>
        </div>
      </div>
    </div>
  </a>
);

SearchItem.propTypes = {
  url: PropType.string,
  name: PropType.string,
  description: PropType.string,
  stars: PropType.number,
  forks: PropType.number,
};

export default SearchItem;
