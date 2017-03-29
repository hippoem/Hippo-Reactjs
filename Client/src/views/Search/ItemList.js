import React from 'react'
import Item from './Item'
import Pagination from './Pagination'

class ItemList extends React.Component {
    render() {
        return (
            <div className="findcart_b">
                <div className="wrap">
                    <div className="fcbcon">
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                       
                    </div>
                     <Pagination/>
                </div>

            </div>
        )
    }
}

export default ItemList