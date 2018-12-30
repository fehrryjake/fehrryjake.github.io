import React from 'react';

// const Header = ({ title, children, color }) => {

//const Header = (props) => {
//  //const { title } = props; // Destructuring.
//  const children = props.children;
//  const style = {
//    headerStyle: {
//      // color: props.color || 'black'
//      color: props.color
//    }
//  };
//  return (
//    <h1
//      style={style.headerStyle}
//    >
//      {children}
//    </h1>
//  );
//}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color
    };
  }


  render() {
    // this.setState({
    //   color: 'black',
    // });
    const style = {
      headerStyle: {
        color: this.state.color
      }
    };
    const children = this.props.children;
    return (
      <h1 style={style.headerStyle}>
        {children}
      </h1>
    );
  }
}

Header.defaultProps = {
  color: 'black'
};

export default Header;
