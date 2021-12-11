import NewsList from "./NewsList";

const Home = ({news, isPending, error} ) => {

    return(
        <div className='home' >
            {isPending && <div> <h1>Loading...</h1> </div> }
            { news && <NewsList  news = {news} /> }
            {isPending && <div> <h1>Loading...</h1> </div> }
        </div>
    );

}
 
export default Home;