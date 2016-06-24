var GroceryList = () => (


  <div> 
    <h2>GroceryList</h2>
    <Cucumbers />
    <Kale />
  </div>

  );

var Cucumbers = () => (
  <li> Cucumbers </li>
  );
var Kale = () => (
    <li> Kale </li>
  );


ReactDOM.render(<GroceryList />, document.getElementById('app'));