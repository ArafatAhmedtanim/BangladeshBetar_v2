export const AllUserTableCols = [
    {
        title: "Email Address",
        dataIndex: "email",
        className: "email",
        key: "0",
        fixed: 'left',
        width: 200,
    },
    {
      title: "Name",
      dataIndex: "username",
      className: "username",
      key: "1"
    },
    {
      title: "Designation",
      dataIndex: "designation",
      className: "designation",
      key: "2"
    },
    {
      title: "Role",
      dataIndex: "role",
      className: "role",
      key: "3"
    },
    {
      title: "Mobile No.",
      dataIndex: "mobile",
      className: "mobile",
      key: "4"
    },
    {
        title: "Station",
        dataIndex: "station_id",
        className: "station_id",
        key: "5"
    },
    {
        title: "Signature",
        dataIndex: "signature",
        className: "signature",
        key: "6"
    },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => "Update",
    }
  ];
  
  export default {
    AllUserTableCols
  };
  