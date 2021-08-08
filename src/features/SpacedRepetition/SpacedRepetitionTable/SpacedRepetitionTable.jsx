import React from 'react';

import MaterialTable from 'material-table';

import tableIcons from '@utils/TableIcons'
import SpacedRepetitionRow from './SpacedRepetitionRow';


const columnData = [
    {
        title: 'Topic',
        field: 'topic',
        align: 'left',
        sorting: true,
        grouping: false,
        cellStyle: {
            borderRight: '0.3px solid black'
        },
    },
    {
        title: 'Learning History',
        field: 'learningHistory',
        align: 'left',
        sorting: false,
        grouping: false,
        readonly: true,
        render: rowData => <SpacedRepetitionRow learningRecords={rowData.learningHistory}/>
    },
];

const SpacedRepetitionTable = ({ data }) => {
    console.log(data)
    return (
        <MaterialTable
            icons={tableIcons}
            columns={columnData}
            data={data}
            options={{
                toolbar: false,
                draggable: false,
                headerStyle: {
                    backgroundColor: '#01579b',
                    fontSize: '1.5em',
                    textAlign: 'center'
                }
            }}
        />
    );
}

export default SpacedRepetitionTable;