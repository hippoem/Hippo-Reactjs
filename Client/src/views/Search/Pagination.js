import React from 'react'

class Pagination extends React.Component {
    render(){
        return(
           <div className="fcbpage">
                <a href="#">&lt;</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">&gt;</a>
            </div>
        )
    }
}

export default Pagination