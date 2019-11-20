import React from 'react';
import { Chart } from 'react-charts';
import PropTypes from 'prop-types';
import RoomSolver from '../utilities/RoomSolver';

const LineGraph = (props) => {

    const data = React.useMemo(() => [
        {
            label: 'Initial Plot',
            data: RoomSolver(props.plot.data, props.plot.volume)
        }
    ], [props]);

    const axes = React.useMemo(() => [
        { primary: true, type: 'log', position: 'bottom'}, 
        { type: 'linear', position: 'left' }
    ], []);


    return (
        <div
        style={{
            width: '100%',
            height: '300px'
        }}
        >
            <Chart data={data} axes={axes} tooltip/>
        </div>
    );

}

LineGraph.propTypes = {
    data: PropTypes.array.isRequired
};

export default LineGraph;