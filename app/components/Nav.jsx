var React = require('react');
var {IndexLink,Link} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return(
      <div>
        <h2>Nav component</h2>
        <IndexLink to="/" activeClassName="active" activeClassStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeClassStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/example" activeClassName="active" activeClassStyle={{fontWeight: 'bold'}}>Example</Link>
      </div>

    );
  }
});

module.exports = Nav;
