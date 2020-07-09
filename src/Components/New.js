import Chart from "react-google-charts";
import React from 'react'
import { Link } from 'react-router-dom';
import { Button} from 'reactstrap';
function New() {
    return (
        <div class="container ">
            <Chart
width={'600px'}
height={'400px'}
chartType="PieChart"
loader={<div>Loading Chart</div>}
data={[
  ['Task', 'Hours per Day'],
  ['5 Star', 25],
  ['4 Star', 4],
  ['3 Star', 1],
  ['2 Star', 1],
  ['1 Star',1],
]}
options={{
  title: 'Farm-Box Direct '+'(Our Customer Ratings)',
 
  is3D: true,
}}
rootProps={{ 'data-testid': '2' }}
/>
<Link to="/"><div className="text-center"><Button className="text-white font-weight-bold bg-success" >Home Page</Button></div></Link>
        </div>
         
    )
}

export default New
