//picture left and text right with link tag
//need photo props and text props

import React, {Component} from 'react';

const Tile = ({d}) => {
        return (
            <div className="col-lg-3 col-xs-1 bg-warning">
               <h1>{d.title}</h1>
                <br />
                <img src={d.image} className="img-fluid" width="304" height="236" />
            </div>
        )
};


export default Tile;
