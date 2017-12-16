var Posts = createReactClass({
  render: function() {
    return (
       <div>
        {this.props.posts.map(function(post){
          return (
            <div key={post.id}>
            <h3>{post.title}</h3> 
            <div>{post.content}</div>
	    <small>{post.created_at}</small>
            </div>
          );
        })}
       </div>
    );
  }
});

