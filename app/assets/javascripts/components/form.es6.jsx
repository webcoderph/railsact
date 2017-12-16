class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {  
    this.setState({
      data: e.target.value
    });   
  }

  render() {
    return (
    <div>
        <input type="text" value={this.state.data} onChange={this.handleChange}/>
        <div>{this.state.data}</div>
    </div>
   )
  }
}


