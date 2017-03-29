import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Form from './Form'
import ItemList from './ItemList'

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