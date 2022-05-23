import React from 'react';
import BlogItem from './BlogItem';


class BlogList extends React.Component { 

     // Constructor 
     constructor(props) {
      super(props);
      this.state = {
          items: [],
          index: 0,
          
      };
  }
  
  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
            });
        })
}

  render() {
 
    let { items } = this.state;


    console.log("Items length:" + items.length);
    return (
        <div >
          
          {items.slice(this.state.index, this.state.index + 20).map((item) => (     
            <BlogItem blog={item} />

          ))}
        </div>
    )
}

getItems()
{
  return this.state.items;
}

 }

export default BlogList;
