import React,{ Component} from "react";

function Table(){
    return(
        <table id="simple-board">
            <tbody>
                <tr id="row0">
                    <td id='cell0-0'>Brand</td>
                    <td id='cell0-1'> Shirt Size</td>
                    <td id='cell0-2'> Short Size</td>
                    <td id='cell0-3'> Pant Size</td>
                </tr>
                <tr id="row1">
                    <td id='cell1-0'>H and W</td>
                    <td id='cell1-1'> L</td>
                    <td id='cell1-2'> M</td>
                    <td id='cell1-3'> S</td>
                </tr>
                <tr id="row2">
                    <td id='cell2-0'>Levi</td>
                    <td id='cell2-1'>  S</td>
                    <td id='cell2-2'>  M</td>
                    <td id='cell2-3'>  L</td>
                </tr>
                <tr id="row3">
                    <td id='cell3-0'>Adidas</td>
                    <td id='cell3-1'>  M</td>
                    <td id='cell3-2'>  L</td>
                    <td id='cell3-3'>  S</td>
                </tr>
                <tr id="row4">
                    <td id='cell4-0'>Uniqlo</td>
                    <td id='cell4-1'>  M</td>
                    <td id='cell4-2'>  S</td>
                    <td id='cell4-3'>  L</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table;