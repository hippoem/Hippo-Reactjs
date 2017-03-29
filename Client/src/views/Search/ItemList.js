import React from 'react'
import Item from './Item'
import Pagination from './Pagination'
import fetch from 'isomorphic-fetch'

class ItemList extends React.Component {

    constructor(){
        super();

        this.state = {
            announces: []
        };

    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/searchcar')
        .then((response) => response.json())
        .then((announces) => this.setState({ announces }))
    }

    render() {

        const announce = this.state.announces.map((ann) => {
            return <Item ann_photo={ann.ann_photo}
            price={ann.price}
            year={ann.year}
            user_photo={ann.user_photo}
            brand={ann.brand_name_eng}
            gene={ann.gene_name_eng}
            firstname={ann.firstname}
            lastname={ann.lastname}
            key={ann.id}
            />
        })

        return (
            <div className="findcart_b">
                <div className="wrap">
                    <div className="fcbcon">
                        {announce}
                    </div>
                     <Pagination/>
                </div>

            </div>
        )
    }
}

export default ItemList