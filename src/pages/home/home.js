import React from 'react';
import Table from './component/analyticsTable.js';
import Map from './component/analyticsMap.js';
import Filter from './component/analyticsFilterForm.js';
import {Row, Col} from 'antd';
import { DataConsumer } from './../../dataProvider/provider';

export default class Home extends React.Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <DataConsumer>{({ 
        analyticsData,
        filterAnalyticsData,

        update,
        filter,

        division,
        getDivision,

        district,
        getDistrict,

        thana,
        getThana,

        selectedDivision,
        selectedDistrict,
        selectedThana, 
      }) =>
          analyticsData !== '' ? (
            <div style={{background: 'white'}}>
            <Row gutter={16}>
              <Filter
                division={division}
                getDivision={getDivision}

                district={district}
                getDistrict={getDistrict}

                // thana={thana}
                // getThana={getThana}

                selectedDivision={selectedDivision}
                selectedDistrict={selectedDistrict}
                selectedThana={selectedThana}

                update={update}
                data={analyticsData}
                filterAnalyticsData={filterAnalyticsData}
                filter={filter}
              />
            </Row>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Table update={update} data={filterAnalyticsData} />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Map data={filterAnalyticsData} />
              </Col>
            </Row>
            </div>
          ) : (
            ''
          )
        }
      </DataConsumer>
    );
  }
}
