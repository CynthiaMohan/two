import Block, {Blocklock} from "../Block";
import {Grid} from "@material-ui/core";
import pie from "../../OtherStuff/Holding";
import React, {Component, useState} from "react";
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import {indigo} from "@material-ui/core/colors";
import {checkUnlocks} from "../Unlocks/Button";


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    blue: {
        backgroundColor: indigo[600],
        margin: theme.spacing(2),
        marginLeft:"25px",
    },
}));



class Redoer extends Component<any, any> {

    constructor(props:any) {
        super(props);


        this.state = {
            list: [pie.trans],
            listU:[]
        };
    }

    clicks = () => {
        checkUnlocks();
        this.setState({list:pie.listO_Open , listU:pie.listO_Up});
    };

    render = () => (
        <>
            <Grid container>
            <Grid>
                <Blocklock draw={this.state.list}/>
            </Grid>
                <Grid>
                    <Blocklock draw={this.state.listU}/>
                </Grid>
                <Grid>
                <div>
                    <Button variant="contained" color="primary" onClick={this.clicks}>
                        Unlocks
                    </Button>
                </div>
                </Grid>
            </Grid>
        </>
    );
}

export default Redoer


