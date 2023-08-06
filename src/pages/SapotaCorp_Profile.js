import Header from '../components/LayoutView/Header/Header';
import Footer from '../components/LayoutView/Footer/Footer';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ProfilePDF() {

  return(
  <div>
    <Header/>
    <SiteBreadcrumb pageTitle="SapotaCorp Profile"/>
    <div className='wrapper-profile'>
      <a className='profile-btn' download href='assets/img/sapota/SapotaCorp Profile.pdf'>
        Download Here <i><FontAwesomeIcon icon={['fas', 'download']}/></i></a>
    </div>
    <Footer/>
  </div>
  )
}

export default ProfilePDF