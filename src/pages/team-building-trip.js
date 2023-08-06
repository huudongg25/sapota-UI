import React, {Component} from "react";
import Header from "../components/LayoutView/Header/Header";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import Footer from "../components/LayoutView/Footer/Footer";
import TeamDetailsMain from "../components/Team/TeamDetailsMain";

class TeamBuildingTrip extends Component{
    render()
    {
        return (
            <React.Fragment>
                <Header/>
                <main>
                    {/* breadcrumb-area-start */}
                    <SiteBreadcrumb pageTitle="Team Building Trip"/>
                    {/* breadcrumb-area-start */}
                    <TeamDetailsMain />
                    <Footer bgMode="dark" />
                    {/* Career */}
                </main>
                <Footer/>
            </React.Fragment>
        )
    }
}

export  default  TeamBuildingTrip;
