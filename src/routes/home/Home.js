

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './Home.css';
import StatWidget from '../../components/Widget';
import Donut from '../../components/Donut';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer,LineChart, Line, Legend } from '../../vendor/recharts';

const title = 'Monitoramento de Energia';


const data = [
      { name: 'BL 1', tensao: 4000, corrente: 2400, value: 600 },
      { name: 'BL 2', tensao: 3000, corrente: 1398,  value: 300 },
      { name: 'BL 3', tensao: 2000, corrente: 9800,  value: 500 },
      
];

const dataLine = [
{name: '1h', corrente: 450, amt: 2400},
{name: '2h', corrente: 413, amt: 2210},
{name: '3h', corrente: 374, amt: 2290},
{name: '4h', corrente: 481, amt: 2000},
{name: '5h', corrente: 389, amt: 2181},
{name: '6h', corrente: 365, amt: 2500},
{name: '7h', corrente: 416, amt: 2100},
{name: '8h', corrente: 234, amt: 1100},
{name: '9h', corrente: 308, amt: 9100},
{name: '10h', corrente: 454, amt: 1100},
{name: '11h', corrente: 251, amt: 5100},
{name: '12h', corrente: 277, amt: 1100}, 
];

const dataLineTensao = [
{name: '1h', tensao: 415, amt: 2400},
{name: '2h', tensao: 398, amt: 2210},
{name: '3h', tensao: 460, amt: 2290},
{name: '4h', tensao: 414, amt: 2000},
{name: '5h', tensao: 474, amt: 2181},
{name: '6h', tensao: 339, amt: 2500},
{name: '7h', tensao: 442, amt: 2100},
{name: '8h', tensao: 463, amt: 1100},
{name: '9h', tensao: 315, amt: 9100},
{name: '10h', tensao: 451, amt: 1100},
{name: '11h', tensao: 440, amt: 5100},
{name: '12h', tensao: 343, amt: 1100},

];

function Home(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Dashboard</PageHeader>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-primary"
            icon="fa fa-money fa-3x"
            count="R$ 260"
            headerText="Valor a pagar"
            footerText="View Details"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-green"
            icon="fa fa-tasks fa-5x"
            count="12"
            headerText="New Tasks!"
            footerText="View Details"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-yellow"
            icon="fa fa-shopping-cart fa-5x"
            count="124"
            headerText="New Orders!"
            footerText="View Details"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-red"
            icon="fa fa-support fa-5x"
            count="13"
            headerText="Support Tickets!"
            footerText="View Details"
            linkTo="/"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">

           <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Corrente
              <div className="pull-right">
                <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton1" >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3">Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <LineChart width={600} height={300} data={dataLine} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
			<Line type='monotone' dataKey='corrente' stroke='#8884d8' activeDot={{r: 8}}/>
			<CartesianGrid strokeDasharray='3 3'/>
			<Tooltip/>
			<YAxis/>
			<XAxis dataKey='name'/>
			<Legend />
			</LineChart>
              </ResponsiveContainer>
            </div>

          </Panel>


          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Tensao
              <div className="pull-right">
                <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton1" >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3">Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <LineChart width={600} height={300} data={dataLineTensao} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
			<Line type='monotone' dataKey='tensao' stroke='#8884d8' activeDot={{r: 8}}/>
			<CartesianGrid strokeDasharray='3 3'/>
			<Tooltip/>
			<YAxis/>
			<XAxis dataKey='name'/>
			<Legend />
			</LineChart>
              </ResponsiveContainer>
            </div>

          </Panel>


           

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Por blocos
              <div className="pull-right">
                <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton2">
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3">Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="corrente" stackId="1" fill="#8884d8" />
                  <Bar dataKey="tensao" stackId="1" fill="#82ca9d" />
                  <Legend />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          

        </div>

        <div className="col-lg-4">
          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Donut Chart Example
            </span>}
          >
            <div>
              <Donut data={data} color="#8884d8" innerRadius="70%" outerRadius="90%" />
            </div>
          </Panel>

        </div>

      </div>
    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
