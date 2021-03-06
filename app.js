var groceryItems = ['kale', 'quinoa', 'cucumbers', 'mushrooms', 'tomato', 'garlic', 'cilantro'];

class GroceryListItems extends React.Component {

  constructor(props) {

    super(props);
  
    this.state = {
      done: false
    };
  }

  onMouseHover() {
    this.setState({
      done: !this.state.done 
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onMouseHover.bind(this)}>{this.props.item}</li>
    );
  };
}

var GroceryList = (props) => (

  <div>
    <h2>GroceryList</h2>
    {props.items.map(item =>
      <GroceryListItems item = {item} />
      )}
  </div>
  
 
);

ReactDOM.render(<GroceryList items={groceryItems}/>, document.getElementById('app'));