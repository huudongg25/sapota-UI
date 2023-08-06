import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
function scrollTopNeed(){
    const offsetNeed =  document.getElementsByClassName('section-contact-us')[0].offsetTop;
    window.scrollTo({top: offsetNeed - 100, behavior: 'smooth'})
}
const BurgerMenus = ({setMenuOpen, menuOpen}) => {

    const [home, setHome] = useState(false)
    const [service, setService] = useState(false)
    const [blog, setBlog] = useState(false)
    const [pages, setPages] = useState(false)

    const router = useRouter()
    const [path, setPath] = useState("")
    useEffect(() => {
        setPath(router.pathname)
    }, [router])

    const openMobileMenu = menu => {

        if (menu == 'home') {
            setHome(!home)
            setService(false)
            setBlog(false)
            setPages(false)
        } else if (menu == 'service') {
            setHome(false)
            setService(!service)
            setBlog(false)
            setPages(false)
        } else if (menu == 'blog') {
            setHome(false)
            setService(false)
            setBlog(!blog)
            setPages(false)
        } else if (menu == 'pages') {
            setHome(false)
            setService(false)
            setBlog(false)
            setPages(!pages)
        }
    };

    return (
        <div className={menuOpen ? "side-mobile-menu open" : "side-mobile-menu"}>
            <div className="close-mobile-menu" onClick={() => setMenuOpen(false)}>
                <a><i><FontAwesomeIcon icon={['fas', 'times']}/></i></a>
            </div>
            <div className="mm-menu">
                <ul>
                    <li><Link href="/" as="/"><a>Home</a></Link></li>
                    {/*<li className={home ? "has-droupdown active" : "has-droupdown"}>*/}
                    {/*  <a onClick={() => { openMobileMenu('home'); }}>Home</a>*/}
                    {/*  <ul className={home ? "sub-menu active" : "sub-menu"}>*/}
                    {/*    <li><Link href="/" as="/"><a>Home 1</a></Link></li>*/}
                    {/*    <li><Link href="/home-2" as="/home-2"><a>Home 2</a></Link></li>*/}
                    {/*  </ul>*/}
                    {/*</li>*/}
                    <li><Link href="/about-us" as="/about-us"><a>About us</a></Link></li>
                    {/*<li><Link href="" as=""><a>Portfolio</a></Link></li>*/}
                    {/*<li><Link href="" as=""><a>Blog</a></Link></li>*/}
                    <li className={service  ? "has-droupdown active" : "has-droupdown"}>
                       <a onClick={() => {
                           openMobileMenu('service');
                       }}>Service </a>
                       <ul className={service ? "sub-menu active" : "sub-menu"}>
                                        <li><Link href="/blockchain-development" as="/blockchain-development"><a>Blockchain Development</a></Link></li>
                                        <li><Link href="/web-app-development" as="/web-app-development"><a>Web App Development</a></Link></li>
                                        <li><Link href="/mobile-app-development" as="/mobile-app-development"><a>Mobile App Development</a></Link></li>
                                        <li><Link href="/customize-software" as="/customize-software"><a>Customize Software</a></Link></li>
                                        <li><Link href="/IT-consultancy" as="/IT-consultancy"><a>IT Consultancy</a></Link></li>
                                        <li><Link href="/QA-&-testing" as="/QA-&-testing"><a>QA and Testing</a></Link></li>
                       </ul>
                   </li>
                   <li><Link href="/services" as="/services"><a>How we work</a></Link></li>
                   <li >
                       <a href='#blog-box'>Blog</a>
                       {/* <ul className={blog ? "sub-menu active" : "sub-menu"}>
                           <li><Link href="/font-declarations" as="/font-declarations"><a>Font Declarations</a></Link>
                           </li>
                           <li><Link href="/team-building-trip" as="/team-building-trip"><a>Team Building
                               Trip</a></Link></li>
                           <li><Link href="/quarterly-award" as="/quarterly-award"><a>Quarterly Award</a></Link></li>
                       </ul> */}
                   </li>
                   <li><a href='#contact-box'>Contact</a></li>
                    {/*<li className={service ? "has-droupdown active" : "has-droupdown"}>*/}
                    {/*  <a onClick={() => { openMobileMenu('service'); }}>Service</a>*/}
                    {/*  <ul className={service ? "sub-menu active" : "sub-menu"}>*/}
                    {/*    <li><Link href="/website-auditor" as="/website-auditor"><a>WebSite Auditor</a></Link></li>*/}
                    {/*    <li><Link href="/website-wacg" as="/website-wacg"><a>Website WCAG</a></Link></li>*/}
                    {/*  </ul>*/}
                    {/*</li>*/}
                    {/*<li><Link href="" as=""><a>Services</a></Link></li>*/}
                    {/*<li className={blog ? "has-droupdown active" : "has-droupdown"}>*/}
                    {/*  <a onClick={() => { openMobileMenu('blog'); }}>Blog</a>*/}
                    {/*  <ul className={blog ? "sub-menu active" : "sub-menu"}>*/}
                    {/*    <li><Link href="/blog" as="/blog"><a>Blog</a></Link></li>*/}
                    {/*    <li><Link href="/monthly-web-development-to-update-react-hooks-cons-wether-says-1" as="/monthly-web-development-to-update-react-hooks-cons-wether-says-1"><a>blog details</a></Link></li>*/}
                    {/*  </ul>*/}
                    {/*</li>*/}
                    {/* <li className={pages ? "has-droupdown active" : "has-droupdown"}>
                      <a onClick={() => { openMobileMenu('pages'); }}>Pages</a>
                      <ul className={pages ? "sub-menu active" : "sub-menu"}>
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
                    {/* <li onClick={scrollTopNeed}><a style={{padding: '0px', borderBottom: 'none'}}>Request A Quote</a></li> */}
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenus;