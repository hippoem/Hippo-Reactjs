import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import MainSlide from './MainSlide'
import '../../styles/style.css'
import '../../styles/home.css'

class Home extends React.Component {

    render (){
        return (
            <div>
                <Header/>
                <div id="content">
                    <MainSlide/>
                </div>
                <Footer/>
                
            </div>
        )
    }


}

export default Home