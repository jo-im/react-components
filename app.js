var GroceryList = (props) => (

  <ul>
    <li>{ props.items[0] } </li>
    <li>{ props.items[1] } </li>
    <li>{ props.items[2] } </li>
  </ul>



);


var groceryItems = ['kale', 'quinoa', 'cucumbers'];

var GroceryListItems = () => (

  <div>
    <h2>GroceryList</h2>
    <GroceryList items= {groceryItems} />

  </div>
  

)


ReactDOM.render(<GroceryListItems/>, document.getElementById('app'));