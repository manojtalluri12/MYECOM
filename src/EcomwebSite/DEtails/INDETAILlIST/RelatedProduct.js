import React from 'react'
import { Link } from 'react-router-dom';

const RelatedProduct = ({data,pro}) => {
  return (
    <div className="relatedgrid">
    {data.map((each) => {
      if (each.category === pro.category) {
        return (
          <Link to={`/details/${each.id}`} className="relatedCards">
            <div className="RelatedTop">
              <div className="relatedtopup">
                <img
                  src={each.thumbnail}
                  alt={each.id}
                  className="relatedimges"
                />
              </div>
              <div className="relatedtopbelow">
                <p className="para">{each.title}</p>
                <p className="buttons">${each.price}</p>
              </div>
            </div>
          </Link>
        );
      }
    })}
  </div>
  )
}

export default RelatedProduct