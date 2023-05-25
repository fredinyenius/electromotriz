import { useEffect, useRef, useState } from 'react';
import { BsList, BsXCircle } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import logoEAKON from '../../assets/img/zapatillas.webp';
import useContact from '../../hooks/useContact';
import { fetchReadContactData } from '../../redux/thunks/contactThunk';
import ContainersImage from '../common/containers/ContainersImage';
import ListsNavLink from '../common/lists/ListsNavLink';

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const header = useRef();
  const nav = useRef();
  const mobileModal = useRef();

  const { contactData } = useContact();

  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? '');

  const documentScroll = () => {
    if (window.location.pathname.includes('productos') === false) {
      header.current?.classList.toggle('header--scroll', window.scrollY > 0);
      nav.current?.classList.toggle('nav--scroll', window.scrollY > 0);
    }
  };

  const handleChangeSelectTheme = (e) => {
    document.documentElement.className = e.target.value;
    localStorage.setItem('theme', e.target.value);
    setTheme(e.target.value);
  };

  const handleClickShowMenu = () => {
    header.current.classList.add('header--move-left');
    mobileModal.current.classList.add('modal--show');
  };

  const handleClickHideMenu = () => {
    header.current.classList.remove('header--move-left');
    mobileModal.current.classList.remove('modal--show');
  };

  document.addEventListener('scroll', documentScroll);

  useEffect(() => {
    if (window.location.pathname.includes('productos')) {
      header.current?.classList.add('header--scroll');
      nav.current?.classList.add('nav--scroll');
    } else {
      header.current?.classList.remove('header--scroll');
      nav.current?.classList.remove('nav--scroll');
    }
  }, [location.pathname]);

  useEffect(() => {
    Object.keys(contactData).length === 0 && dispatch(fetchReadContactData());
  }, []);

  return (
    <header
      className="header"
      ref={header}
    >
      <nav
        className="nav"
        ref={nav}
      >
        <div className="container f-elements f-elements--header">
          <Link to="/">
            <ContainersImage src={logoEAKON} alt="Logo de EAKON" className="nav__logo" />
          </Link>
          <div
            className="modal modal--mobile"
            ref={mobileModal}
            onClick={handleClickHideMenu}
          >
            <ListsNavLink
              className="list list--mobile-modal list--right-mobile-modal f-elements f-elements--responsive f-elements--center gap-md"
              handleClickList={e => e.stopPropagation()}
              handleClickNavLink={handleClickHideMenu}
            />
            <button
              className="icon icon--close"
              onClick={handleClickHideMenu}
            >
              <BsXCircle />
            </button>
          </div>
          <div className="f-elements f-elements--center gap-2xs">
            <select
              className="select select--theme"
              onChange={handleChangeSelectTheme}
              value={theme}
            >
              <option value="system">💻</option>
              <option value="dark">🌚</option>
              <option value="light">🌞</option>
            </select>
            {/* <button
              className="icon icon--sm"
            >
              <BsCart />
            </button> */}
            <button
              className="icon icon--menu"
              onClick={handleClickShowMenu}
            >
              <BsList />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;