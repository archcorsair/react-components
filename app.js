// TODO

class GroceryListItem extends React.Component { // TodoListItem
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hovered: false
    };
  }



  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onMouseOver() {
    this.setState({
      hovered: true
    });
  }

  onMouseOut() {
    this.setState({
      hovered: false
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryListItems = (props) => ( // TodoList
  <ul>
    {props.groceries.map(item =>
    <GroceryListItem item={item} />
  )}
  </ul>
);

var GroceryList = () => ( // App
  <div>
  <GroceryListItems groceries={['Milk', 'Eggs', 'Bread', 'Soda', 'Beer']} />
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));
