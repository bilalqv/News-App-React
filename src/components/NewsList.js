import * as React from 'react';
import NewsElement from './NewsElement';
import Container from '@mui/material/Container';
import Masonry from 'react-masonry-css';




const NewsList = ({ news }) => {
    const news_list = news.articles;
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
      };
    return ( 
        <Container>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                >
                    {news_list.map(ele => (
                        <div key={ele.id}>
                            <NewsElement  element={ele} />
                        </div>
                    ))}
            </Masonry>
        </Container>
     );
}
 
export default NewsList;