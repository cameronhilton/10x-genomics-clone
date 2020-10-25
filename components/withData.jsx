import React from 'react';

const withData = (WrappedComponent) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      fetch(this.props.dataSource)
        .then(response => response.json())
        .then(data => this.setState({data: data.results}));
    }

    render () {
      const { dataSource, ...otherProps } = this.props;
      const { data } = this.state;
      console.log(data)
      return (
        data.length === 0
        ? <div>Loading</div>
        : <WrappedComponent data={this.state.data} {...otherProps}/>
      );
    }
  };

  return WithData;
}

export default withData;
