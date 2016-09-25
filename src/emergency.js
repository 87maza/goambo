import React from 'react';
import {  Link } from 'react-router'

const Emergency = React.createClass({
    render() {
        return (
            <div>

                <section>
                    <h1>What's your medical emergency?</h1>
                    <ul class="input-list style-1 clearfix" id="end">
                        <li>
                            <input type="text" placeholder="e.g. Paper cut, Food Poisoning, Headache, Sprain, Toothache" className="focus"/>
                        </li>
                    </ul>
                </section>
                    <h2>or select from our list:</h2>
                <section>
                    <select class="cs-select cs-skin-overlay">
                        <option value="" disabled selected>Medical Emergencies</option>
                            <option defaultValue="1">Foot Pain</option>
                            <option defaultValue="2">Broken Arm</option>
                            <option defaultValue="3">Eye irritation</option>
                            <option defaultValue="4">Food Poisoning</option>
                    </select>
                </section>
                <Link to="/modal" class="myButton">Submit</Link>
            </div>
        )
    }
});
export default Emergency;
