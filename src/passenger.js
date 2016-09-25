import React from 'react';
import Map from './map';
import {  Link } from 'react-router'


const Passenger = React.createClass({
    render() {
        return (
            <div>
                <h2>goAmbo Passenger</h2>

                <div className="parent">
                    <div id='parent_div_1'>
                        <Map />
                    </div>
                    <div id='parent_div_2'>
                        <h2><Link to="/emergency">AMBO</Link></h2>
                        <h2><Link to="/emergency">AMBO Stretcher</Link></h2>
                    </div>
                </div>
            </div>
        )
    }
});
//create link_tos
export default Passenger;

