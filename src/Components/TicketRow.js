import React from "react";

function TicketRow(props){

    return(
            <tr key={props.ticketId}>
                <td>
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
    );
}

export default TicketRow;