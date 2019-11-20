import RoomData from './RoomData';

const RT60 = (volume, surfaceAbsorbtion) => {
    return (0.161 * volume) / (surfaceAbsorbtion)
}

const SurfaceAbsorption = (surfaces, frequency) => {
    let A = 0;
    surfaces.forEach(element => {
        RoomData.forEach(roomElement => {
            if(element.Material === roomElement.Material)
            {
                A += (parseInt(element.Area) * roomElement[frequency])
            }
        });
    });
    return A;
}

const RoomAnalysis = (surfaces, volume) => {
    let analysis = [];
    Object.keys(RoomData[0]).forEach((frequency) => {
        if(frequency !== "Material" && frequency !== "tableData") // Apparently material-tables appends data to the object...
        {
            analysis.push([parseInt(frequency), RT60(volume, SurfaceAbsorption(surfaces, frequency))]);
        }
    });
    return analysis;
}

export default RoomAnalysis;
/* USEAGE
let testA = SurfaceAbsorption([[24, 0.05], [9, 0.02], [9, 0.14]]);
console.log(RT60(18, testA));
*/