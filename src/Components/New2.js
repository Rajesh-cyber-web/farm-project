import Chart from "react-google-charts";
import React from 'react'
import { Link } from 'react-router-dom';
import SecondPage from "./SecondPage";
import { Button} from 'reactstrap';
function New2() {
    return (<>
        <div className="container">
            <Chart
  width={'95%'}
  height={'100%'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Name', 'Product Availability : Yes & Cost'],
    ['Small Combo', 150],
    ['Medium Combo', 200],
    ['Large Combo', 250],
    ['Tamoto', 32],
    ['beans', 22],
    ['Mirchi', 3],
    ['red onion', 42],
    ['Apple ', 33],
    ['  Cherry', 46  ],
    ['Lettuce   ',12  ],
    [' redish ', 11 ],
    [' garlic ', 76 ],
    ['  kiwi fruit', 54 ],
    [' Pine apple ', 37 ],
    ['collard  ', 15 ],
    ['eggplant  ', 25 ],
    [' blackberry ', 36 ],
    ['blue berry  ',17  ],
    ['pumpkins   ',25  ],
    ['dragon fruit  ',  75],
    ['water melon  ',  85],
    ['  mango ', 32 ],
    [' orange ', 52 ],
    [' cabbage ',  24],
    [' bell pepper ', 27 ],
    [' red cabbage ', 15 ],
    [' raspberry ',13  ],
    ['  grapes',35  ],
  ]}
  rootProps={{ 'data-testid': '6' }}
  chartPackages={['corechart', 'controls']}
  render={({ renderControl, renderChart }) => {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '40%' }}>{renderControl(() => true)}</div>
        <div style={{ width: '60%' }}>{renderChart()}</div>
      </div>
    )
  }}
  controls={[
    {
      controlType: 'StringFilter',
      options: {
        filterColumnIndex: 0,
        matchType: 'any',//'prefix' | 'exact',
        ui: {
          label: 'Enter the Name of Product : ',
        },
      },
    },
    {
      controlType: 'NumberRangeFilter',
      controlID: 'age-filter',
      options: {
        filterColumnIndex: 1,
        ui: {
          labelStacking: 'vertical',
          label: 'Price Range:',
          allowTyping: false,
          allowMultiple: false,
        },
      },
    },
  ]}
/><Link to="/one"><div className="text-center"><Button className="text-white font-weight-bold bg-danger" >Close</Button></div></Link>
        </div>
        <SecondPage></SecondPage>
        </>
    )
}

export default New2
