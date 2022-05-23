import React, { useState} from 'react';
import BlogList from '../../components/Home/BlogList';
import SearchBar from '../../components/Home/SearchBar';
import Modal from '../../components/Modal'


const Home = () => {
   
  const blogList = useState(<BlogList blogs/>);
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');
  console.log(blogList.length);


  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const filteredBlogs = <BlogList blogs/>;
    // console.log(allBlogs.title);
    // const filteredBlogs = allBlogs.filter((blog) =>
    //   blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    // );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(<BlogList blogs />);
    setSearchKey('');
  };

  const handlePostRequest = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        title: 'Article title',
         body: "Article body" })
  };
  fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
     alert("Data sent");
  };


  return (
    <div>
    
 
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />


      {!blogs.length ? <h3>No items match your search!</h3> : <BlogList searchKey={searchKey} index = {0} />}
      
      <Modal
        handlePostRequest={handlePostRequest}
      />
    </div>
  );
};

export default Home;
