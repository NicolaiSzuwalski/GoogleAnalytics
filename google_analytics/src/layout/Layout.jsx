import { Outlet} from 'react-router-dom'
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

export const Layout = () => {

  const links = [
    {name : 'Home', link: 'home'},
    {name : 'About', link : 'about'},
    {name : 'Gallery', link: 'gallery'},
  ]


  return (
    <>
        <Navbar links={links}/>
        <Outlet/>
        <Footer/>
    </>
  );
};
