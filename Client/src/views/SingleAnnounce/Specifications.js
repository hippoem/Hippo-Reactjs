import React, {Component} from 'react';

class Specifications extends Component {
    render() {
        return (
            <div className="rentsgqtext tab-content">
                <dl>
                    <dt>Year</dt>
                    <dd>2011</dd>
                    <dt>Seats</dt>
                    <dd>5 Seats</dd>
                    <dt>Fuel Type</dt>
                    <dd>Diesel</dd>
                    <dt>Transmission</dt>
                    <dd>Auto</dd>
                    <dt>Mileage</dt>
                    <dd>100-150,000 km</dd>
                    <dt>Consumption</dt>
                    <dd>6 L / 100 km</dd>
                    <dt>Doors</dt>
                    <dd>5 doors</dd>
                    <dt>Type</dt>
                    <dd>Coupe</dd>
                </dl>
            </div>
        );
    }
}

export default Specifications;