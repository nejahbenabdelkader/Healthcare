import { Container, Grid, Typography } from "@mui/material";
import Page from "./components/Page";
import { useTheme } from '@mui/material/styles';

import {
    AppTasks,
    AppNewsUpdate,
    AppOrderTimeline,
    AppCurrentVisits,
    AppWebsiteVisits,
    AppTrafficBySite,
    AppWidgetSummary,
    AppCurrentSubject,
    AppConversionRates,
  } from './sections/@dashboard/app';
import { useEffect, useState } from "react";
import AdminService from "../../service/AdminService";
const Dashboard = () => {
  const [numbers,setNumbers]=useState({
    "numberOfAllUsers": 0,
    "numberOfUsersLastMonth": 0,
    "numberOfDoctors": 0,
    "numberOfPatient": 0,
    "numberOfPharmacy": 0
})
    const theme = useTheme();
    useEffect( ()=> {
      const fetchData = async ()=> {
         const response= await new AdminService().getNumbersOfUsers();
         console.log(response.data)
         setNumbers(response.data)
      }  
      fetchData() 
     
    }
    ,[])
  return (
    <Page title="chart" >
      <Container maxWidth="xl" sx={{mt:15,mr:13}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="All Users" color="info" total={numbers.numberOfAllUsers} icon={'ant-design:user'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Users Last Month" total={numbers.numberOfUsersLastMonth} color="warning" icon={'ant-design:user'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Doctors" total={numbers.numberOfDoctors} color="success" icon={'ant-design:user'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Pharmacies" total={numbers.numberOfPharmacy} color="error" icon={'ant-design:user'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              
              title="Appoitment"
              chartLabels={[
                '01/01/2020',
                '02/01/2020',
                '03/01/2020',
                '04/01/2020',
                '05/01/2020',
                '06/01/2020',
                '07/01/2020',
                '08/01/2020',
                '09/01/2020',
                '10/01/2020',
                '11/01/2020',
                '12/01/2021',
                '01/01/2021',
                '02/01/2021',
                '03/01/2021',
                '04/01/2021',
                '05/01/2021',
                '06/01/2021',
              ]}
              chartData={[
                {
                  name: 'appoitment',
                  type: 'column',
                  fill: 'solid',
                  color: '#8B0000',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30,25,70,12,24,45,50,48,60,30],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Users"
              chartData={[
                { label: 'Doctors', value: numbers.numberOfDoctors },
                { label: 'Pharmacy', value: numbers.numberOfPharmacy },
                { label: 'Patient', value: numbers.numberOfPatient },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[2],
                theme.palette.chart.violet[0],
              ]}
            />
          </Grid>
          </Grid>
      </Container>
    </Page>
  );
};
export default Dashboard