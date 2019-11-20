import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';

const RoomInputGrid = (props) => {
    const [tableData, setTableData] = useState({
        data: props.data,
        resolve: () => {}
    });

    useEffect(() => {
        tableData.resolve();
        props.updatePlot(tableData.data);
    }, [tableData]);

    return (
        <MaterialTable
          options={{
            search: false
          }}
          columns={[
            { title: "Material", field: "Material" },
            { title: "Area (M^2)", field: "Area", type: "numeric" },
          ]}
          data={tableData.data}
          title="Room Construction"
          editable={{
            onRowAdd: newData => { 
                return new Promise((resolve, reject) => {
                    const { data } = tableData;
                    data.push(newData);
                    setTableData({data, resolve});
                }); 
            },
            onRowUpdate: (newData, oldData) => {
                return new Promise((resolve, reject) => {
                    const { data } = tableData;
                    const index = data.indexOf(oldData);
                    data[index] = newData;
                    setTableData({data, resolve});
                }); 
            },
            onRowDelete: oldData => {
                return new Promise((resolve, reject) => {
                    const { data } = tableData;
                    const index = data.indexOf(oldData);
                    data.splice(index, 1);
                    setTableData({data, resolve});
                }); 
            }

        }}
        />
    );
};

export default RoomInputGrid;