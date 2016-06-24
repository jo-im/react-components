var groceryItems = ['kale', 'quinoa', 'cucumbers', 'mushrooms', 'tomato', 'garlic', 'cilantro'];

class GroceryListItems extends React.Component {

  constructor(props) {

    super(props);
  }

  render() {

    return (

      <li> {this.props.item} </li>

      );
  }

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