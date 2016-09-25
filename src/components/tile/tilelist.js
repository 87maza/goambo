//picture left and text right with link tag
//need photo props and text props

import React, {Component} from 'react';
import Tile from './tile';
import Data from './alpha';

class TileList extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: "",
            datas: Data
        }
    }
    updateSearch(e){
        this.setState({term: e.target.value});
    }
    addTile(e){
        e.preventDefault();
        let title = this.refs.title.value;
        let image = this.refs.image.value;
        let id = Math.floor((Math.random()*100)+1);
        this.setState({
            datas: this.state.datas.concat({id, title, image})
        });
        console.log(this.state.datas);
    }

    render() {

        let filteredData = Data.filter((n) => {
                return n.title.toLowerCase().indexOf(this.state.term) !== -1;
            }
        );
        return (
            <div className="row">
                {filteredData.map((d)=> {
                    return <Tile d={d} key={d.id} title={d.title} image={d.image} />
                })
                }
                <h4>Filter Here:</h4>
                <input
                    placeholder="Chop it up"
                    type = "text"
                    value = {this.state.term}
                    onChange = {this.updateSearch.bind(this)}
                />
                <form onSubmit={this.addTile.bind(this)}>
                    <input type="text" ref="title"/>
                    <input type="text" ref="image"/>
                    <button type="submit">Add New Tiles</button>
                </form>
            </div>
        )
    }
};


export default TileList;
