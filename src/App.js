import React, {useState} from 'react';
import LineGraph  from './components/LineGraph';
import RoomInputGrid from './components/RoomInputGrid';
import MaterialGrid from './components/MaterialsGrid';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const App = () => {

    const initialData = [
        { Material: "Brick", Area: 24},
        { Material: "Concrete", Area: 9},
        { Material: "Plaster", Area: 9},
    ];
    
    const [plotData, setPlot] = useState({data: initialData, volume: 18});

    const UpdatePlot = (data) => {
        setPlot({...plotData, data});
    };

    return (
        <>
            <Grid container spacing={3} justify="center">
                <Grid item xs={10} align="center">
                    <Paper>
                        <Typography variant="h5" component="h3">
                            Instructions - Room Solver
                        </Typography>
                        <Typography component="p">
                            When adding to the room construction list ensure the material name matches the material name given in the "Room Materials Table".  
                        </Typography>
                        <a href="https://github.com/leonps531/room-solver">https://github.com/leonps531/room-solver</a>
                    </Paper>
                </Grid>
                <Grid item xs={10}>
                    <MaterialGrid />
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField
                        id="standard-basic"
                        label="Volume (m^3)"
                        value={plotData.volume}
                        onChange={(event) => {
                            setPlot({...plotData, volume: event.target.value});
                        }}
                    />
                </Grid>
                <Grid item xs={10}>
                    <RoomInputGrid updatePlot={UpdatePlot} data={initialData}/>
                </Grid>
                <Grid item xs={10} align="center">
                    <LineGraph plot={plotData}/>
                </Grid>
            </Grid>
        </>
    );
};


export default App;