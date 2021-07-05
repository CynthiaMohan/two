import React, {useEffect} from "react";
import {Divider, Grid, Tooltip} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {useState} from "react";


// class BlockC extends React.Component<any, any>{
//
//     constructor(props:any) {
//         super(props);
//
//
//
//     }
//
//     inc = ()=>
//     {
//         console.log("called")
//     }
//
//
//
//     render() {
//         return(
//             <Grid container className="">
//                 {/*Row 1*/}
//                 <Grid container
//                       direction="row"
//                       justify="space-evenly"
//                       alignItems="center">
//                     <h3>{this.props.data.name}<span className=""> {this.props.data.qty}</span></h3>
//                 </Grid>
//                 <Divider/>
//                 {/*Row 2*/}
//                 <Grid container
//                       direction="row"
//                       justify="space-evenly"
//                       alignItems="center">
//
//                     <Grid item direction="column">
//                         <div className="">click: {this.props.data.perClick}</div>
//                         <div className="">
//                             <Button color="secondary" variant="outlined" aria-label="outlined secondary" onClick={() => {
//                                 changeQty_L(1);
//
//                             }}>Do Click</Button>
//                         </div>
//                         <div className="">
//                             <Tooltip title={disp}>
// <span>
//     <Button disabled={!this.props.data.checkCost().did} color="secondary" variant="outlined"
//             aria-label="outlined secondary" onClick={this.props.data.uButton}>{this.props.data.getMess().mess}</Button>
// </span>
//                             </Tooltip>
//                         </div>
//                     </Grid>
//                 </Grid>
//                 <Divider/>
//             </Grid>
//         )
//
//     }
//
//
// }


function Block(props: any) {

    let {data} = props;
    let [lQty, setLQty] = useState(0); //DONT USE DIRECTLY USE ChangeQty LOCALLY
    let [mess,setMess]= useState('')


    let disp = `Transistors: ${data.costs.trans(data.upgradeLVl)}
                Chips: ${data.costs.chips(data.upgradeLVl)}
                Board: ${data.costs.boards(data.upgradeLVl)}
                Cpu: ${data.costs.cpus(data.upgradeLVl)}
    `;

    function changeQty_L(x:number)
    {
        data.changeQty(x);
        setLQty(data.qty);
        console.log(x)
    }

    let inc = ()=> {

       let time = setInterval(()=>{
           changeQty_L(data.perSec);
       },1000);

       return ()=> clearInterval(time);

    }

    useEffect(inc);

    let upButton= ()=>
    {
        data.perSec++
        setMess(data.addLvl().mess);
    }

    return (

        <Grid container className="">
            {/*Row 1*/}
            <Grid container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center">
                <h3>{data.name}<span className=""> {data.qty}</span></h3>
            </Grid>
            <Divider/>
            {/*Row 2*/}
            <Grid container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center">

                <Grid item direction="column">
                    <div className="">click: {data.perClick}</div>
                    <div className="">
                        <Button color="secondary" variant="outlined" aria-label="outlined secondary" onClick={() => {
                            changeQty_L(1);

                        }}>Do Click</Button>
                    </div>
                    <div className="">
                        <Tooltip title={disp}>
<span>
    <Button disabled={!data.checkCost().did} color="secondary" variant="outlined"
            aria-label="outlined secondary" onClick={data.uButton}>{data.getMess().mess}</Button>
</span>
                        </Tooltip>
                    </div>
                </Grid>
            </Grid>
            <Divider/>
        </Grid>
    );
}

export default Block;
