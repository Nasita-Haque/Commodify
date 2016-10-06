import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import data from './data.js'
import {Link} from 'react-router'
import Masonry from 'react-masonry-component';



// var masonryOptions = {
//     transitionDuration: 0
// };

var CategoryPage = React.createClass({

    render: function () {
      let category = this.props.params.category;
      let categoryTitle = category
      let itemsArr = data[category + 'Get']()
      let categoryResults = [];
      // const Grid = measureItems(CSSGrid)

      //Checking if itemsArr contains items and routing to category data with link to product.jsx page.
      if(itemsArr.length > 0) {
        categoryResults.push(itemsArr.map(
          function(element, index){
            return (
              <div key={index}><li className="image-element-class"><Link to={category + '/' + element.id}><img alt={element.id} src={element.image}></img></Link> <p className="imageText">{element.name}<br />${element.price}</p> </li></div>
        )}))
      }
      categoryTitle.charAt( categoryTitle.length-1 ) === "s" ?
          categoryTitle = categoryTitle.slice(0, -1) : null;
        return (
			<div className="container">
      <h1 className='title'>{categoryTitle[0].toUpperCase() + categoryTitle.substring(1, categoryTitle.length) +" Commodities"}</h1>
      <Masonry>
          {categoryResults}
      </Masonry>

			</div>
        );
    }
});

export default CategoryPage;
