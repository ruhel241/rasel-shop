import React, { Component } from "react";
import Container from '@material-ui/core/Container';

class Min extends Component  {
    constructor(props) {
        super(props);
        this.state = { 
        // GrameenMin
            GrameenMinItem: '',
            GrameenMinEx: '',
            GrameenMinUnit: 10,
        //GrameenMB
            GrameenMBItem: '',
            GrameenMBEx: '',
            GrameenMBUnit: 10,
        //Grameen20Min
            Grameen20MinItem: '',
            Grameen20MinEx: '',
            Grameen20MinUnit: 20,
        //AirtelMin
            AirtelMinItem: '',
            AirtelMinEx: '',
            AirtelMinUnit: 10,
        //AirtelMB
            AirtelMBItem: '',
            AirtelMBEx: '',
            AirtelMBUnit: 10,
        //Airtel26MB
            Airtel26MBItem: '',
            Airtel26MBEx: '',
            Airtel26MBUnit: 26,
        //RobiMin
            RobiMinItem: '',
            RobiMinEx: '',
            RobiMinUnit: 10,
        //RobiMB
            RobiMBItem: '',
            RobiMBEx: '',
            RobiMBUnit: 10,
        //BangalinkMin
            BangalinkMinItem: '',
            BangalinkMinEx: '',
            BangalinkMinUnit: 10,
        //BangalinkMB
            BangalinkMBItem: '',
            BangalinkMBEx: '',
            BangalinkMBUnit: 10,
        }
    }
    //GrameenMin
        GrameenMinItemChangHandler = (event) => {
            this.setState({ 
                GrameenMinItem: event.target.value 
            });
        }
        GrameenMinExChangHandler = (event) => {
            this.setState({ 
                GrameenMinEx: event.target.value 
            });
        }
    //GrameenMB
        GrameenMBItemChangHandler = (event) => {
            this.setState({ 
                GrameenMBItem: event.target.value 
            });
        }
        GrameenMBExChangHandler = (event) => {
            this.setState({ 
                GrameenMBEx: event.target.value 
            });
        }
    //Grameen20Min
        Grameen20MinItemChangHandler = (event) => {
            this.setState({ 
                Grameen20MinItem: event.target.value 
            });
        }
        Grameen20MinExChangHandler = (event) => {
            this.setState({ 
                Grameen20MinEx: event.target.value 
            });
        }
    //AirtelMin
        AirtelMinItemChangHandler = (event) => {
            this.setState({ 
                AirtelMinItem: event.target.value 
            });
        }
        AirtelMinExChangHandler = (event) => {
            this.setState({ 
                AirtelMinEx: event.target.value 
            });
        }
    //AirtelMB
        AirtelMBItemChangHandler = (event) => {
            this.setState({ 
                AirtelMBItem: event.target.value 
            });
        }
        AirtelMBExChangHandler = (event) => {
            this.setState({ 
                AirtelMBEx: event.target.value 
            });
        }
    //Airtel26MB
        Airtel26MBItemChangHandler = (event) => {
            this.setState({ 
                Airtel26MBItem: event.target.value 
            });
        }
        Airtel26MBExChangHandler = (event) => {
            this.setState({ 
                Airtel26MBEx: event.target.value 
            });
        }
    // RobiMin
        RobiMinItemChangHandler = (event) => {
            this.setState({ 
                RobiMinItem: event.target.value 
            });
        }
        RobiMinExChangHandler = (event) => {
            this.setState({ 
                RobiMinEx: event.target.value 
            });
        }
    // RobiMB
        RobiMBItemChangHandler = (event) => {
            this.setState({ 
                RobiMBItem: event.target.value 
            });
        }
        RobiMBExChangHandler = (event) => {
            this.setState({ 
                RobiMBEx: event.target.value 
            });
        }
    // BangalinkMin
        BangalinkMinItemChangHandler = (event) => {
            this.setState({ 
                BangalinkMinItem: event.target.value 
            });
        }
        BangalinkMinExChangHandler = (event) => {
            this.setState({ 
                BangalinkMinEx: event.target.value 
            });
        }
    // BangalinkMB
         BangalinkMBItemChangHandler = (event) => {
            this.setState({ 
                BangalinkMBItem: event.target.value 
            });
        }
        BangalinkMBExChangHandler = (event) => {
            this.setState({ 
                BangalinkMBEx: event.target.value 
            });
        }
    render() {
        const { 
        // GrameenMin
            GrameenMinItem, 
            GrameenMinEx, 
            GrameenMinUnit,
        //GrameenMB
            GrameenMBItem, 
            GrameenMBEx, 
            GrameenMBUnit,
        // Grameen20Min
            Grameen20MinItem, 
            Grameen20MinEx, 
            Grameen20MinUnit,
        // AirtelMin
            AirtelMinItem, 
            AirtelMinEx, 
            AirtelMinUnit,
        //AirtelMB
            AirtelMBItem, 
            AirtelMBEx, 
            AirtelMBUnit,
        //Airtel26MB
            Airtel26MBItem, 
            Airtel26MBEx, 
            Airtel26MBUnit,  
         // RobiMin
            RobiMinItem, 
            RobiMinEx, 
            RobiMinUnit,
         // RobiMB
            RobiMBItem, 
            RobiMBEx, 
            RobiMBUnit,
         // BangalinkMin
            BangalinkMinItem, 
            BangalinkMinEx, 
            BangalinkMinUnit,
        // BangalinkMB
            BangalinkMBItem, 
            BangalinkMBEx, 
            BangalinkMBUnit
        } = this.state;

    // GrameenMin
        const GrameenMinSale = GrameenMinEx ? (GrameenMinItem - GrameenMinEx) : 0;
        const GrameenMinTotal = GrameenMinEx ? (GrameenMinSale * GrameenMinUnit) : 0;
    // GrameenMB
        const GrameenMBSale = GrameenMBEx ? (GrameenMBItem - GrameenMBEx) : 0;
        const GrameenMBTotal = GrameenMBEx ? (GrameenMBSale * GrameenMBUnit) : 0;
    // Grameen20Min
        const Grameen20MinSale = Grameen20MinEx ? (Grameen20MinItem - Grameen20MinEx) : 0;
        const Grameen20MinTotal = Grameen20MinEx ? (Grameen20MinSale * Grameen20MinUnit) : 0;
    // AirtelMin
        const AirtelMinSale = AirtelMinEx ? (AirtelMinItem - AirtelMinEx) : 0;
        const AirtelMinTotal = AirtelMinEx ? (AirtelMinSale * AirtelMinUnit) : 0;
    // AirtelMB
        const AirtelMBSale = AirtelMBEx ? (AirtelMBItem - AirtelMBEx) : 0;
        const AirtelMBTotal = AirtelMBEx ? (AirtelMBSale * AirtelMBUnit) : 0;
    // Airtel26MB
        const Airtel26MBSale = Airtel26MBEx ? (Airtel26MBItem - Airtel26MBEx) : 0;
        const Airtel26MBTotal = Airtel26MBEx ? (Airtel26MBSale * Airtel26MBUnit) : 0;
    // RobiMin
        const RobiMinSale = RobiMinEx ? (RobiMinItem - RobiMinEx) : 0;
        const RobiMinTotal = RobiMinEx ? (RobiMinSale * RobiMinUnit) : 0;
    // RobiMB
        const RobiMBSale = RobiMBEx ? (RobiMBItem - RobiMBEx) : 0;
        const RobiMBTotal = RobiMBEx ? (RobiMBSale * RobiMBUnit) : 0;
    // BangalinkMin
        const BangalinkMinSale = BangalinkMinEx ? (BangalinkMinItem - BangalinkMinEx) : 0;
        const BangalinkMinTotal = BangalinkMinEx ? (BangalinkMinSale * BangalinkMinUnit) : 0;
    // BangalinkMB
        const BangalinkMBSale = BangalinkMBEx ? (BangalinkMBItem - BangalinkMBEx) : 0;
        const BangalinkMBTotal = BangalinkMBEx ? (BangalinkMBSale * BangalinkMBUnit) : 0;
        
        const totalCount = (GrameenMinTotal + GrameenMBTotal + Grameen20MinTotal + AirtelMinTotal + AirtelMBTotal + Airtel26MBTotal + RobiMinTotal + RobiMBTotal + BangalinkMinTotal + BangalinkMBTotal)


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
                        <td>Grameen-Min</td>
                        <td>
                            <input 
                                type="number" 
                                value={GrameenMinItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.GrameenMinItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={GrameenMinEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.GrameenMinExChangHandler}
                            />
                        </td>
                        <td>{GrameenMinSale}</td>
                        <td>{GrameenMinUnit}</td>
                        <td>{GrameenMinTotal}</td>
                    </tr>
                    <tr>
                        <td>Grameen-MB</td>
                        <td>
                            <input 
                                type="number" 
                                value={GrameenMBItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.GrameenMBItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={GrameenMBEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.GrameenMBExChangHandler}
                            />
                        </td>
                        <td>{GrameenMBSale}</td>
                        <td>{GrameenMBUnit}</td>
                        <td>{GrameenMBTotal}</td>
                    </tr>
                    <tr>
                        <td>Grameen-20Min</td>
                        <td>
                            <input 
                                type="number" 
                                value={Grameen20MinItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.Grameen20MinItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={Grameen20MinEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.Grameen20MinExChangHandler}
                            />
                        </td>
                        <td>{Grameen20MinSale}</td>
                        <td>{Grameen20MinUnit}</td>
                        <td>{Grameen20MinTotal}</td>
                    </tr>
                    <tr>
                        <td>Airtel-Min</td>
                        <td>
                            <input 
                                type="number" 
                                value={AirtelMinItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.AirtelMinItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={AirtelMinEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.AirtelMinExChangHandler}
                            />
                        </td>
                        <td>{AirtelMinSale}</td>
                        <td>{AirtelMinUnit}</td>
                        <td>{AirtelMinTotal}</td>
                    </tr>
                    <tr>
                        <td>Airtel-MB</td>
                        <td>
                            <input 
                                type="number" 
                                value={AirtelMBItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.AirtelMBItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={AirtelMBEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.AirtelMBExChangHandler}
                            />
                        </td>
                        <td>{AirtelMBSale}</td>
                        <td>{AirtelMBUnit}</td>
                        <td>{AirtelMBTotal}</td>
                    </tr>
                    <tr>
                        <td>Airtel-26MB</td>
                        <td>
                            <input 
                                type="number" 
                                value={Airtel26MBItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.Airtel26MBItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={Airtel26MBEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.Airtel26MBExChangHandler}
                            />
                        </td>
                        <td>{Airtel26MBSale}</td>
                        <td>{Airtel26MBUnit}</td>
                        <td>{Airtel26MBTotal}</td>
                    </tr>
                    <tr>
                        <td>Robi-Min</td>
                        <td>
                            <input 
                                type="number" 
                                value={RobiMinItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.RobiMinItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={RobiMinEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.RobiMinExChangHandler}
                            />
                        </td>
                        <td>{RobiMinSale}</td>
                        <td>{RobiMinUnit}</td>
                        <td>{RobiMinTotal}</td>
                    </tr>
                    <tr>
                        <td>Robi-MB</td>
                        <td>
                            <input 
                                type="number" 
                                value={RobiMBItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.RobiMBItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={RobiMBEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.RobiMBExChangHandler}
                            />
                        </td>
                        <td>{RobiMBSale}</td>
                        <td>{RobiMBUnit}</td>
                        <td>{RobiMBTotal}</td>
                    </tr>
                    <tr>
                        <td>Bangalink-Min</td>
                        <td>
                            <input 
                                type="number" 
                                value={BangalinkMinItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.BangalinkMinItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={BangalinkMinEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.BangalinkMinExChangHandler}
                            />
                        </td>
                        <td>{BangalinkMinSale}</td>
                        <td>{BangalinkMinUnit}</td>
                        <td>{BangalinkMinTotal}</td>
                    </tr>
                    <tr>
                        <td>Bangalink-MB</td>
                        <td>
                            <input 
                                type="number" 
                                value={BangalinkMBItem} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.BangalinkMBItemChangHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="number" 
                                value={BangalinkMBEx} 
                                style={{fontSize:"20px", width:"80px"}}
                                onChange={this.BangalinkMBExChangHandler}
                            />
                        </td>
                        <td>{BangalinkMBSale}</td>
                        <td>{BangalinkMBUnit}</td>
                        <td>{BangalinkMBTotal}</td>
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

export default Min