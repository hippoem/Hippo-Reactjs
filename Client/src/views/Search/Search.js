import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'

import {Form, ItemList} from './index'
import './Search.css'

class Search extends React.Component {
    render() {
        return (
            <div>
                <Header bgblue="bgblue"/>
                <div id="content">
                    <Form/>
                    <ItemList/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Search