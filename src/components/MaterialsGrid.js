import React from 'react';
import MaterialTable from 'material-table';
import RoomData from '../utilities/RoomData';

const MaterialsGrid = () => {

    return ( <
        MaterialTable options = {
            {
                search: true
            }
        }
        columns = {
            [{
                    title: "Material",
                    field: "Material"
                },
                {
                    title: "Abs 125Hz",
                    field: "125",
                    type: "numeric"
                },
                {
                    title: "Abs 250Hz",
                    field: "250",
                    type: "numeric"
                },
                {
                    title: "Abs 500Hz",
                    field: "500",
                    type: "numeric"
                },
                {
                    title: "Abs 1kHz",
                    field: "1000",
                    type: "numeric"
                },
                {
                    title: "Abs 2kHz",
                    field: "2000",
                    type: "numeric"
                },
                {
                    title: "Abs 4kHz",
                    field: "4000",
                    type: "numeric"
                }
            ]
        }
        data = {RoomData}
        title = "Room Materials Table" /
        >
    );
};

export default MaterialsGrid;