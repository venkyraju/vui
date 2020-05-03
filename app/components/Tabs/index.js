import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Card from '../../components/Card';

export default () => (
    <Tabs>
      <TabList>
        <Tab>
          <h4>Title 1</h4>
          <button type="button" className="action-btn">
            <i class="fa fa-times" data-unicode="f00d"></i>
          </button>
        </Tab>
        <Tab>
          <h4>Title 2</h4>
          <button type="button" className="action-btn">
            <i class="fa fa-times" data-unicode="f00d"></i>
          </button>
        </Tab>
        <Tab>
          <h4>Title 3</h4>
          <button type="button" className="action-btn">
            <i class="fa fa-times" data-unicode="f00d"></i>
          </button>
        </Tab>
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
          <div className='card-widget full-col-with'>
              <Card></Card>
          </div>
        </TabPanel>
          <TabPanel>
            <div className='card-widget full-col-with'>
                <Card></Card>
            </div>
          </TabPanel>
      </div>
    </Tabs>
  );