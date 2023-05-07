import React from "react";

function TicketRow(props){

    return(
        <div>
            <tr>
                <td>
                    {props.ticketID}
                </td>
                <td>
                    {props.ticketPriority}
                </td>
                <td>
                    {props.ticketSummary}
                </td>
                <td>
                    {props.ticketAssignee}
                </td>
                <td>
                    {props.tickeStatus}
                </td>
                <td>
                    {props.tickeCreated}
                </td>
            </tr>
        </div>
    );
}

export default TicketRow;