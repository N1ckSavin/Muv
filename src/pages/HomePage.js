import {Redirect} from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import {removeUser} from 'store/slices/userSlice'
import { useAppDispatch } from 'hooks/redux-hooks';
import 'styles/headerTop.css';
import 'styles/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "styles/search.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import CarouseleContainer from '../components/sliders/MainSlider'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logomuv.png';
import AddFavourites from 'components/AddFavourites';
import MovieList from 'components/MovieList';
import MovieListHeading from 'components/MovieListHeading';
import RemoveFavourites from 'components/RemoveFavourites';
import SearchBox from 'components/SearchBox';
import { useEffect, useState } from 'react';
import ProfilePage from './ProfilePage';




const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [searchValue, setSearchValue] = useState ('')
  
  
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue || "marvel" }&apikey=58a55ee1`;

    const response = await fetch(url);
    const responseJson = await response.json();
   
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])
  
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );
  
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);
  
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };
  
  
  const AddFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
  
  const RemoveFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
      
    );
  
    setFavourites(newFavouriteList);
          saveToLocalStorage(newFavouriteList);
  
    }
    
    const dispatch = useAppDispatch();

    const {isAuth, email} = useAuth();
    

    return isAuth ? (
        
        <div className='container'>
            <header className='HeaderTop'>  
                <div className="flex-wrap">
                    <div className="areaHeader flex-wrap">

                        <Link to={"/"}>
                            <div className="headerTop__logo">
                                <img src={logo} alt="" />
                            </div>
                        </Link>
                        <div className="logOut-parrent">
                        <p className='LogOut'
                           onClick={()=> dispatch(removeUser())}>Выйти</p> 
                        </div>
                        <Link to="/profile">
                        <div className="headerAvatar">
                            <FontAwesomeIcon className='userAvater' icon={faUserTie} />
                        </div>
                        </Link>
                        
                    </div>
                </div>


            </header>
            
            <div className="main-slider">
                <CarouseleContainer />
            </div>
            <div className='container-fluid movie-app'>

<div className='row d-flex align-items-center mt-4 mb-4'>
      <MovieListHeading heading = 'Фильмы' />
      <div className="header__search"> 
                                  <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
                        </div> 
      </div>
      <div className='movie-list d-flex'>
      <MovieList movies = {movies} handleFavouritesClick={AddFavouriteMovie}favouriteComponent={AddFavourites} />
      </div>
      

    </div>
    <footer>
                <hr />
                <div className="footer-content">
                    <div className="info-site">
                    <ul className='footer-subtitle-parrent'>
                            <h3 className='footer-subtitle'> Разделы</h3>
                            <li className='footer-subtitle-item'><Link to={'/'}>Главная страница </Link></li>
                            <li className='footer-subtitle-item'><Link to={'/profile'}>Личный кабинет</Link></li>
                        </ul>
                        <div className="logo-footer-parrent">
                            <div className="logo-footer">
                                
                            </div>
                        </div>
                    </div>
                    <div className="popcorn-img">
                    <img className='logo-footer' src="https://pospeliha.ru/wp-content/uploads/2017/01/movie.png" alt="" />
                </div>
                    <div className="logo-footer-parrent">
                        <FontAwesomeIcon className='icon-footer-logo' icon={faVideo} />
                        <p className='text-logo'>Добавляйте фильмы в список избранного в своем профиле.</p>
                    </div>     
                                  
                </div>
                
                <hr />
                    <p className='by'>© 2023 by SAVIN NIKITA with React</p> 
            </footer>
            
        </div>
        
    ) : (
        <Redirect to="/login" />
    )
}
export default HomePage

