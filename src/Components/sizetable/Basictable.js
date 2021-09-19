import React,{ Component} from "react";

function Table(){
    return(
        <table id="simple-board">
            <tbody>
                <tr id="row0">
                    <td id='cell0-0'>Brand</td>
                    <td id='cell0-1'>  |  Shirt Size</td>
                    <td id='cell0-2'>  |  Short Size</td>
                    <td id='cell0-3'>  |  Pant Size</td>
                </tr>
                <tr id="row1">
                    <td id='cell1-0'>HnM</td>
                    <td id='cell1-1'>|____L____</td>
                    <td id='cell1-2'>|____M____</td>
                    <td id='cell1-3'>|____S____</td>
                </tr>
                <tr id="row2">
                    <td id='cell2-0'>Levi</td>
                    <td id='cell2-1'>|____S____</td>
                    <td id='cell2-2'>|____M____</td>
                    <td id='cell2-3'>|____L____</td>
                </tr>
                <tr id="row3">
                    <td id='cell3-0'>Adidas</td>
                    <td id='cell3-1'>|____M____</td>
                    <td id='cell3-2'>|____L____</td>
                    <td id='cell3-3'>|____S____</td>
                </tr>
                <tr id="row4">
                    <td id='cell4-0'>Uniqlo</td>
                    <td id='cell4-1'>|____M____</td>
                    <td id='cell4-2'>|____S____</td>
                    <td id='cell4-3'>|____L____</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table;