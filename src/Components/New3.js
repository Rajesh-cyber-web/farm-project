import Chart from "react-google-charts";
import React from 'react'
import { Link } from 'react-router-dom';
import { Button} from 'reactstrap';
function New3() {
    return (<>
       
            <div class="container" style={{ display: 'flex' }}>
  <Chart
    width={400}
    height={'300px'}
    chartType="BubbleChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['ID', 'ACTIVE CASES', 'TOTAL RECOVERY', 'DEATHS', 'POPULATION'],
      ['CAN', 66, 74, 5676, 3739900],
      ['DEU',644,72, 32452, 8192307],
      ['DNK', 96, 43, 444, 552305],
      ['EGY', 723, 21,4355, 76203],
      ['GBR', 905,89, 677, 6801570],
      ['IRN', 43, 47,3322, 7337148],
      ['IRQ', 643, 83, 12345, 3090763],
      ['ISR', 893, 43, 865, 785600],
      ['USA', 289,87	, 131462, 1028744],
      ['RUS', 336, 77, 25467, 307007000],
      ['IND', 560,90, 2374,1380159707],
    ]}
    options={{
      title:
        'Current Covid-19 Situation in whole World ' +
        'and most effecting Countries list',
      hAxis: { title: 'Deaths' },
      vAxis: { title: 'Daily New Cases' },
      bubble: { textStyle: { fontSize: 13 } },
    }}
  />
        </div>
        <Link to="/"><div className="text-center"><Button className="text-white font-weight-bold bg-secondary" >Home Page</Button></div></Link></>
    )
}

export default New3
