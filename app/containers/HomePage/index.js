import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import SearchBox from 'components/SearchBox';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from 'components/Content';
import reducer from './reducer';
import saga from './saga';

import { changeLanguage, loadRepos } from './actions';

import {
  makeSelectRepositories,
  makeSelectLanguage,
  makeSelectLoading,
  makeSelectError,
} from './selector';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.loadRepos();
  }

  render() {
    return (
      <div className="page">
        <div className="main">
          <Header />
          <Content>
            <SearchBox
              language={this.props.language}
              loading={this.props.loading}
              error={this.props.error}
              onSearchText={this.props.onChangeLanguage}
              onSearch={this.props.loadRepos}
              repositories={this.props.repos}
            />
          </Content>
        </div>
        <Footer />
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeLanguage: evt => dispatch(changeLanguage(evt.target.value)),
    loadRepos: () => dispatch(loadRepos()),
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepositories(),
  language: makeSelectLanguage(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

HomePage.propTypes = {
  loading: PropTypes.bool,
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  error: PropTypes.string,
  language: PropTypes.string,
  onChangeLanguage: PropTypes.func,
  loadRepos: PropTypes.func,
  onSearch: PropTypes.func,
};

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
