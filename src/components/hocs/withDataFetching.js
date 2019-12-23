import React from 'react';

const withDataFetching = props => WrappedComponent => {
  class withDataFetching extends React.Component {
    constructor () {
      super ();
      this.state = {
        results: [],
        loading: true,
        error: '',
      };
    }

    async fetchDate () {
      try {
        const data = await fetch (props.dataSource);
        const json = await data.json ();

        if (json) {
          this.setState ({
            results: json,
            loading: false,
          });
        }
      } catch (error) {
        this.setState ({
          loading: false,
          error: error.message,
        });
      }
    }

    async componentDidMount () {
      this.fetchDate ();
    }

    render () {
      const {results, loading, error} = this.state;

      return (
        <WrappedComponent
          results={results}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  }

  withDataFetching.displayName = `withDataFetching(${WrappedComponent})`;

  return withDataFetching;
};

export default withDataFetching;
