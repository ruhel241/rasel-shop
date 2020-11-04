import React, { Component } from "react";
import Container from '@material-ui/core/Container';

class Shop extends Component  {
    constructor(props) {
        super(props);
        this.state = { 
        // derby
            derbyItem: '',
            derbyEx: '',
            derbyUnit: 5,
        //partner
            partnerItem: '',
            partnerEx: '',
            partnerUnit: 2.5,
        //pilot
            pilotItem: '',
            pilotEx: '',
            pilotUnit: 5,
        //capstan
            capstanItem: '',
            capstanEx: '',
            capstanUnit: 10,
        //switch
            switchItem: '',
            switchEx: '',
            switchUnit: 10,
        //goldleaf
            goldleafItem: '',
            goldleafEx: '',
            goldleafUnit: 10,
        //star
            starItem: '',
            starEx: '',
            starUnit: 7,
        //benson
            bensonItem: '',
            bensonEx: '',
            bensonUnit: 15,
        //city
            cityItem: '',
            cityEx: '',
            cityUnit: 2.5,
        }
    }
    //derby
        derbyItemChangHandler = (event) => {
            this.setState({ 
                derbyItem: event.target.value 
            });
        }
        derbyExChangHandler = (event) => {
            this.setState({ 
                derbyEx: event.target.value 
            });
        }
    //partner
        partnerItemChangHandler = (event) => {
            this.setState({ 
                partnerItem: event.target.value 
            });
        }
        partnerExChangHandler = (event) => {
            this.setState({ 
                partnerEx: event.target.value 
            });
        }
    //pilot
        pilotItemChangHandler = (event) => {
            this.setState({ 
                pilotItem: event.target.value 
            });
        }
        pilotExChangHandler = (event) => {
            this.setState({ 
                pilotEx: event.target.value 
            });
        }
    //capstan
        capstanItemChangHandler = (event) => {
            this.setState({ 
                capstanItem: event.target.value 
            });
        }
        capstanExChangHandler = (event) => {
            this.setState({ 
                capstanEx: event.target.value 
            });
        }
    //switch
        switchItemChangHandler = (event) => {
            this.setState({ 
                switchItem: event.target.value 
            });
        }
        switchExChangHandler = (event) => {
            this.setState({ 
                switchEx: event.target.value 
            });
        }
    //goldleaf
        goldleafItemChangHandler = (event) => {
            this.setState({ 
                goldleafItem: event.target.value 
            });
        }
        goldleafExChangHandler = (event) => {
            this.setState({ 
                goldleafEx: event.target.value 
            });
        }
    // star
        starItemChangHandler = (event) => {
            this.setState({ 
                starItem: event.target.value 
            });
        }
        starExChangHandler = (event) => {
            this.setState({ 
                starEx: event.target.value 
            });
        }
    // benson
        bensonItemChangHandler = (event) => {
            this.setState({ 
                bensonItem: event.target.value 
            });
        }
        bensonExChangHandler = (event) => {
            this.setState({ 
                bensonEx: event.target.value 
            });
        }
    // city
        cityItemChangHandler = (event) => {
            this.setState({ 
                cityItem: event.target.value 
            });
        }
        cityExChangHandler = (event) => {
            this.setState({ 
                cityEx: event.target.value 
            });
        }
    render() {
        const { 
        // derby
            derbyItem, 
            derbyEx, 
            derbyUnit,
        //partner
            partnerItem, 
            partnerEx, 
            partnerUnit,
        // pilot
            pilotItem, 
            pilotEx, 
            pilotUnit,
        // capstan
            capstanItem, 
            capstanEx, 
            capstanUnit,
        //switch
            switchItem, 
            switchEx, 
            switchUnit,
        //goldleaf
            goldleafItem, 
            goldleafEx, 
            goldleafUnit,  
         // star
            starItem, 
            starEx, 
            starUnit,
         // benson
            bensonItem, 
            bensonEx, 
            bensonUnit,
         // city
            cityItem, 
            cityEx, 
            cityUnit
        } = this.state;

    // derby
        const derbySale = derbyEx ? (derbyItem - derbyEx) : 0;
        const derbyTotal = derbyEx ? (derbySale * derbyUnit) : 0;
    // partner
        const partnerSale = partnerEx ? (partnerItem - partnerEx) : 0;
        const partnerTotal = partnerEx ? (partnerSale * partnerUnit) : 0;
    // pilot
        const pilotSale = pilotEx ? (pilotItem - pilotEx) : 0;
        const pilotTotal = pilotEx ? (pilotSale * pilotUnit) : 0;
    // capstan
        const capstanSale = capstanEx ? (capstanItem - capstanEx) : 0;
        const capstanTotal = capstanEx ? (capstanSale * capstanUnit) : 0;
    // switch
        const switchSale = switchEx ? (switchItem - switchEx) : 0;
        const switchTotal = switchEx ? (switchSale * switchUnit) : 0;
    // goldleaf
        const goldleafSale = goldleafEx ? (goldleafItem - goldleafEx) : 0;
        const goldleafTotal = goldleafEx ? (goldleafSale * goldleafUnit) : 0;
    // star
        const starSale = starEx ? (starItem - starEx) : 0;
        const starTotal = starEx ? (starSale * starUnit) : 0;
    // benson
        const bensonSale = bensonEx ? (bensonItem - bensonEx) : 0;
        const bensonTotal = bensonEx ? (bensonSale * bensonUnit) : 0;
    // city
        const citySale = cityEx ? (cityItem - cityEx) : 0;
        const cityTotal = cityEx ? (citySale * cityUnit) : 0;

        const totalCount = (derbyTotal + partnerTotal + pilotTotal + capstanTotal + switchTotal + goldleafTotal + starTotal + bensonTotal + cityTotal)


        return (
            <Container maxWidth="lg">
                <table className="tableClass">
                    <tr>
                        <th>Item Name</th>
                        <th>Item Total</th>
                        <th>Extra</th>
                        <th>Sale</th>
                        <th>Unit</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>Derby</td>
                        <td>
                            <input 
                                type="number" 
                                value={derbyItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.derbyItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={derbyEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.derbyExChangHandler}
                            />
                        </td>
                        <td>{derbySale}</td>
                        <td>{derbyUnit}</td>
                        <td>{derbyTotal}</td>
                    </tr>
                    <tr>
                        <td>Partner</td>
                        <td>
                            <input 
                                type="number" 
                                value={partnerItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.partnerItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={partnerEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.partnerExChangHandler}
                            />
                        </td>
                        <td>{partnerSale}</td>
                        <td>{partnerUnit}</td>
                        <td>{partnerTotal}</td>
                    </tr>
                    <tr>
                        <td>Pilot</td>
                        <td>
                            <input 
                                type="number" 
                                value={pilotItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.pilotItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={pilotEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.pilotExChangHandler}
                            />
                        </td>
                        <td>{pilotSale}</td>
                        <td>{pilotUnit}</td>
                        <td>{pilotTotal}</td>
                    </tr>
                    <tr>
                        <td>Capstan</td>
                        <td>
                            <input 
                                type="number" 
                                value={capstanItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.capstanItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={capstanEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.capstanExChangHandler}
                            />
                        </td>
                        <td>{capstanSale}</td>
                        <td>{capstanUnit}</td>
                        <td>{capstanTotal}</td>
                    </tr>
                    <tr>
                        <td>Switch</td>
                        <td>
                            <input 
                                type="number" 
                                value={switchItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.switchItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={switchEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.switchExChangHandler}
                            />
                        </td>
                        <td>{switchSale}</td>
                        <td>{switchUnit}</td>
                        <td>{switchTotal}</td>
                    </tr>
                    <tr>
                        <td>Goldleaf</td>
                        <td>
                            <input 
                                type="number" 
                                value={goldleafItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.goldleafItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={goldleafEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.goldleafExChangHandler}
                            />
                        </td>
                        <td>{goldleafSale}</td>
                        <td>{goldleafUnit}</td>
                        <td>{goldleafTotal}</td>
                    </tr>
                    <tr>
                        <td>Star</td>
                        <td>
                            <input 
                                type="number" 
                                value={starItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.starItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={starEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.starExChangHandler}
                            />
                        </td>
                        <td>{starSale}</td>
                        <td>{starUnit}</td>
                        <td>{starTotal}</td>
                    </tr>
                    <tr>
                        <td>Benson</td>
                        <td>
                            <input 
                                type="number" 
                                value={bensonItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.bensonItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={bensonEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.bensonExChangHandler}
                            />
                        </td>
                        <td>{bensonSale}</td>
                        <td>{bensonUnit}</td>
                        <td>{bensonTotal}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>
                            <input 
                                type="number" 
                                value={cityItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.cityItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={cityEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.cityExChangHandler}
                            />
                        </td>
                        <td>{citySale}</td>
                        <td>{cityUnit}</td>
                        <td>{cityTotal}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                        <td></td>
                        <td><b>Total</b></td>
                        <td><b>{totalCount}</b></td>
                    </tr>
                    
                </table>
            </Container>
        );
    }
}

export default Shop