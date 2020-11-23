import React from 'react';
import Tabs from '@cmsgov/design-system/dist/components/Tabs/Tabs'
import TabPanel from '@cmsgov/design-system/dist/components/Tabs/TabPanel'
import Iframe from 'react-iframe';

class Resume extends React.Component{
   render(){
      return(
         <Tabs>
         <TabPanel id="summary" tab="Resume">
         <Iframe url="https://docs.google.com/document/d/e/2PACX-1vT6IGAuO46JJjsERkOCnlJzIL7Z6mq8yz4-5IyO5jJt5Ky_xLqX7LchS2xCS3hEzA9MswmFXE_PHv6N/pub?embedded=true"
            display= "flex"
            flex-direction= "column"
            id="resume"
            className="ds-u-overflow--scroll"
            />
         </TabPanel>
         <TabPanel id="preamble" tab="Project 1">
           Describe project
         </TabPanel>
         <TabPanel id="amendments" tab="Project 2">
           <h2 className="ds-h4">Text</h2>
     
           <ol className="ds-c-list">
             <li>Text</li>
           </ol>
     
           <h2 className="ds-h4">Text</h2>
     
           <ol className="ds-c-list" start="1">
             <li>Text</li>
           </ol>
         </TabPanel>
       </Tabs>

      )
   }
}

export default Resume;