import React, { useState } from 'react';

import MaterialTable from 'material-table';
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';

import cn from './totalContacts.module.scss';
import { data } from './data';

function TotalContacts() {
  const [tableData, setTableData] = useState(data);

  const columns = [
    {
      title: 'Client ID',
      field: 'id',
      cellStyle: { background: '#fff' },
      headerStyle: { color: '#000' },
    },
    {
      title: 'Client name',
      field: 'name',
      cellStyle: { background: '#fff' },
      headerStyle: { color: '#000' },
    },
    {
      title: 'TRN/PPSN',
      field: 'trn',
      cellStyle: { background: '#fff' },
      headerStyle: { color: '#000' },
    },
    {
      title: 'Year end',
      field: 'year',
      cellStyle: { background: '#fff' },
      headerStyle: { color: '#000' },
    },
    {
      title: 'ARD',
      field: 'ard',
      cellStyle: { background: '#fff' },
      headerStyle: { color: '#000' },
    },
    {
      title: 'Company number',
      field: 'company',
      cellStyle: { background: '#fff' },
      headerStyle: { color: '#000' },
    },
    {
      title: 'Email',
      field: 'email',
      cellStyle: { background: '#fff' },
      headerStyle: { color: '#000' },
    },
    {
      title: 'Phone number',
      field: 'phone',
      cellStyle: { background: '#fff' },
      headerStyle: { color: '#000' },
    },
    {
      title: 'Company address',
      field: 'address',
      cellStyle: { background: '#fff' },
      headerStyle: { color: '#000' },
    },
  ];
  return (
    <section className={cn.totalContacts}>
      <MaterialTable
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);

              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: 'Click me',
            onClick: (e, data) => console.log(data),
          },
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: 'left',
          searchAutoFocus: true,
          searchFieldVariant: 'standard',
          filtering: false,
          paging: true,
          pageSizeOptions: [10, 15, 20, 25, 50, 100],
          pageSize: 10,
          paginationType: 'stepped',
          showFirstLastPageButtons: true,
          paginationPosition: 'bottom',
          exportButton: false,
          exportAllData: false,
          exportFileName: 'TableData',
          addRowPosition: 'first',
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: true,
          showTextRowsSelected: true,
          grouping: false,
          columnsButton: true,
          rowStyle: (data, index) => (index % 2 === 0 ? { background: '#f5f5f5' } : null),
          headerStyle: { background: '#F5F5F5', color: '#000' },
        }}
        title="Total Contacts"
        icons={{ Add: () => <AddIcon /> }}
      />
    </section>
  );
}

export default TotalContacts;
