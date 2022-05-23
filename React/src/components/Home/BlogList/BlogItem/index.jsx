import React from 'react';


class BlogItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        user: [],
    };
}

getComments(blog) {

  try{
  fetch(
    "https://jsonplaceholder.typicode.com/comments?postId=" + blog.id)
      .then((res) => res.json())
      .then((json) => {
          this.setState({
              items: json,
          });
      })
    }
    catch(error){
      console.log(error);
    }
}

getUser(blog) {
try{
  fetch(
    "https://jsonplaceholder.typicode.com/users/" + blog.userId)
      .then((res) => res.json())
      .then((json) => {
          this.setState({
              user: json,
          });
      })
    }
    catch(error){
      console.log(error);
    }  
     
}

  render() {
    var { blog: {
      id,
      body,
      title,
      userId,
    } } = this.props;

   this.getComments(this.props.blog);
   this.getUser(this.props.blog);
  const {items, user} = this.state;

    return (
      <div id ={id}>
        <h1>{title}</h1>
        <img  src='https://picsum.photos/700'/>
        <h3>Article created by {this.state.user.name}</h3>  
        <p >{body}</p>
        <h3>Comments</h3>
        {this.state.items.slice(0, 3).map(function (item, i) {
               
                return <p  id={item.id}>{item.body}</p>
               
            })}
        
      </div>

    );


  }
}

export default BlogItem;
