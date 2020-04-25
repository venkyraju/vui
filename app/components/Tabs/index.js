import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Card from '../../components/Card';

export default () => (
    <Tabs>
      <TabList>
        <Tab>
        <h4>Title 2</h4>
        <i class="fa fa-times" data-unicode="f00d"></i>
        </Tab>
        <Tab><h4>Title 1</h4></Tab>
      </TabList>
      <div className='tab-panel-warper'>
        <TabPanel>
        <div className='card-widget full-col-with'>
            <Card></Card>
        </div>
        <div className='card-widget'>
            <Card></Card>
        </div>
        <div className='card-widget'>
            <Card></Card>
        </div>
        </TabPanel>
        <TabPanel>
            <Card></Card>
        </TabPanel>
      </div>
    </Tabs>
  );