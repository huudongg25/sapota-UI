import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Head from 'next/head';
import TopHeader from './TopBar';
import BurgerMenus from './BurgerMenus';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import {loadGetInitialProps} from "next/dist/shared/lib/utils";

function scrollTopNeed(){
    const offsetNeed =  document.getElementsByClassName('section-contact-us')[0].offsetTop;
    window.scrollTo({top: offsetNeed - 100, behavior: 'smooth'})
}
const Header = () => {

    const handleScroll = () => {
        if (window.scrollY >= 100) {
            document.getElementsByClassName('header-fix')[0].classList.add('active');
        } else {
            document.getElementsByClassName('header-fix')[0].classList.remove('active');
        }

        if (window.scrollY >= 300) {
            document.getElementById('scrollUp1').classList.add('active');
        } else {
            document.getElementById('scrollUp1').classList.remove('active');
        }

        // console.log(window.scrollY);
    };

    const getNamePage = () => {
        if (String(router.pathname) === '/') {
            return 'Home - SapotaCorp'
        } else {
            let title = String(router.pathname).replace('/', '').charAt(0).toUpperCase() + String(router.pathname).slice(2)
            let arr= title.split("-")
            arr.forEach(function(item, index) {
                arr[index] = item.replace(item[0], item[0].toUpperCase());
            });
            return arr.join(' ') + ' - SapotaCorp'
            // return String(router.pathname).replace('/', '').charAt(0).toUpperCase() + String(router.pathname).replace('/', '').replaceAll('-',' ').slice(1) + ' - SapotaCorp';
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }


    const [menuOpen, setMenuOpen] = useState(false)

    const router = useRouter()
    const [path, setPath] = useState("")
    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll, true);
        setPath(router.pathname)
    }, [router])

    return (
        <React.Fragment>
            <Head>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
                <link rel="shortcut icon" href="assets/img/sapota/favicon.png"></link>
                <title>{getNamePage()}</title>
            </Head>
            <header id="header-wrap">
                <TopHeader/>
                <div id="sticky-header" className="main-menu-area header-fix">
                    <div className="container">
                        <div className="row align-items-center">
                            <div style={{paddingLeft: '15px'}}
                                 className="col-xl-3 col-lg-3 col-md-6 col-8 d-flex align-items-center">
                                <div className="logo">
                                    {/*<Link href="/" as="/">*/}
                                    {/*	<Image src={'/assets/img/sapota/logocty1-1.png'} width='230' height='55' alt="flag" />*/}
                                    {/*</Link>*/}
                                    <a href="/" as="/">
                                        <img src="/assets/img/sapota/logocty1-1.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div id="right-header" className="col-xl-9 col-lg-9 col-md-6 col-4">
                                {/* <div onClick={scrollTopNeed} className="header-button f-right d-none d-lg-block">
                                    <a className="btn" ><span className="btn-text">Request A Quote <i><FontAwesomeIcon
                                        icon={['fas', 'long-arrow-alt-right']}/></i></span> </a>
                                </div> */}
                                <div className="main-menu text-right d-none d-lg-block">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className={router.pathname === "/" ? "active" : ""}><Link href="/"
                                                                     as="/"><a>Home</a></Link>
                                             {/* <ul className="sub-menu text-left">
													<li><Link href="/" as="/"><a>Home 1</a></Link></li>
													<li><Link href="/home-2" as="/home-2"><a>Home 2</a></Link></li>
												</ul>  */}
                                            </li>
                                            <li className={router.pathname === "/about-us" ? "active" : ""}><Link
                                            href="/about-us" as="/about-us"><a>About us</a></Link>
                                            </li>
                                            <li className={router.pathname === "/services" || router.pathname === "/blockchain-development"
                                            || router.pathname === "/web-app-development" || router.pathname === "/mobile-app-development" || router.pathname === "/customize-software" 
                                            || router.pathname === "/IT-consultancy" || router.pathname === "/QA-&-testing"
                                            ? "active" : ""}><Link
                                               href="/services" as="/services"><a>Services</a></Link>
                                                <ul className="sub-menu text-left">
                                                    <li><Link href="/blockchain-development" as="/blockchain-development"><a>Blockchain Development</a></Link></li>
                                                     <li><Link href="/web-app-development" as="/web-app-development"><a>Web App Development</a></Link></li>
                                                    <li><Link href="/mobile-app-development" as="/mobile-app-development"><a>Mobile App Development</a></Link></li>
                                                    <li><Link href="/customize-software" as="/customize-software"><a>Customize Software</a></Link></li>
                                                    <li><Link href="/IT-consultancy" as="/IT-consultancy"><a>IT Consultancy</a></Link></li>
                                                    <li><Link href="/QA-&-testing" as="/QA-&-testing"><a>QA and Testing</a></Link></li>
                                                </ul>
                                            </li>
                                            {/* <li className={router.pathname === "/portfolio" ? "active" : ""}><Link
                                           href="" as=""><a>Portfolio</a></Link>
                                                <ul className="sub-menu text-left">
													<li><Link href="/case-1" as="/case-1"><a>Case One</a></Link></li>
													<li><Link href="/case-2" as="/case-2"><a>Case Two</a></Link></li>
													<li><Link href="/case-3" as="/case-3"><a>Case Three</a></Link></li>
													<li><Link href="/case-details" as="/case-details"><a>Case Details</a></Link></li>
													<li><Link href="/career" as="/career"><a>Career</a></Link></li>
													<li><Link href="/faq" as="/faq"><a>Faq</a></Link></li>
													<li><Link href="/goals" as="/goals"><a>Goals</a></Link></li>
													<li><Link href="/price" as="/price"><a>Price</a></Link></li>
													<li><Link href="/team" as="/team"><a>Team</a></Link></li>
													<li><Link href="/team-details" as="/team-details"><a>Team Single</a></Link></li>
													<li><Link href="/shop" as="/shop"><a>Shop</a></Link></li>
													<li><Link href="/contact" as="/contact"><a>Contact</a></Link></li>
												</ul>
                                            </li> */}
                                            <li className={router.pathname === "/blog" ? "active" : ""}>
                                           <Link href='/blog'>Blog</Link>
                                                {/* <ul className="sub-menu text-left">
                                                   <li><Link href="/font-declarations" as="/font-declarations"><a>Font Declarations</a></Link></li>
                                                   <li><Link href="/team-building-trip" as="/team-building-trip"><a>Team Building Trip</a></Link></li>
                                                   <li><Link href="/quarterly-award" as="/quarterly-award"><a>Quarterly Award</a></Link></li>
                                                </ul> */}
                                            </li>
                                             <li className={router.pathname === "/contact" ? "active" : ""}><a href='#contact-box'>Contact</a></li> 
                                        </ul>
                                    </nav>
                                </div>
                                <div className="d-block d-xl-none d-lg-none text-right">
                                    <div className="menu-bar">
                                        <button className="bars" onClick={() => {
                                            setMenuOpen(!menuOpen)
                                        }}>
                                            <i className="far fa-bars"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div onClick={scrollToTop} id="scrollUp1">
                    <i className="fas fa-angle-up"/>
                </div>

                <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}/>

            </header>
        </React.Fragment>
    );
}


export default Header;