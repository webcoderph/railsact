class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: '', content: ''};
    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(e) {
    this.setState({title: e.target.value});
  }

  handleContent(e) {
    this.setState({content: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      post: {
        title: this.state.title,
	content: this.state.content
      }
    };

    $.post('/api/v1/posts',data, function(c){
      alert("save");
    });
    console.log(this.state);
  }

  render () {
    return (
    <div className="row">
      <h4>Create a  post</h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Title</label>
	  <input type="text" className="form-control" placeholder="title" value={this.state.title} onChange={this.handleTitle}/>
        </div>
        <div className="form-group">
          <label>Content</label>
	  <textarea className="form-control" rows="10" placeholder="content" value={this.state.content} onChange={this.handleContent}></textarea>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" >Publish</button>
        </div>
      </form>
    </div>
    );
  }
}


