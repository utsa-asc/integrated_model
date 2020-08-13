import React from 'react';
import { Grid, Card, CardTitle, CardText } from 'react-mdl';
import { Container, Tabs, Tab, Box, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{backgroundColor:'white'}}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 800,
  },
  tabs: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    // margin: '50px',
    position: 'center',
    backgroundColor: '#0c2340',
    color: 'white'
    // '#0c2340'
  }
}));

export default function Trial2() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabPanel value={value} index={0}>
        <Grid container>
          <Container><p>Strategic Education Partnerships</p></Container>
          <Grid item xs={4}>
            <Container>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardText >
                  <p>College of Fine & Liberal Arts</p>
                  <p>College of Business</p>
                  <p>College of Education</p>
                </CardText>
              </Card>
            </Container>
          </Grid>
          <Grid item xs={8}>
            <Container>
              <h2>GREATER ACCESS</h2>
              <p>Lorem</p>
            </Container>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <Container><h2>INCREASED ENROLLMENT</h2></Container>
          <Grid item xs={4}>
            <Container>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle >College of Fine & Liberal Arts</CardTitle>
              </Card>
              <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
                <CardText>College of Business</CardText>
              </Card>
            </Container>
          </Grid>
          <Grid item xs={8}>
            <Container>
              <Card shadow={5} style={{minWidth: '600', margin: 'auto'}}>
                <CardText>This app allows you to generate passwords randomly of any length less than 128 characters.</CardText>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container>
            <Container><h2>HIGH QUALITY PROGRAMS</h2></Container>
            <Grid item xs={4}>
              <Container>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle >College of Fine & Liberal Arts</CardTitle>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
                  <CardText>College of Business</CardText>
                </Card>
              </Container>
            </Grid>
            <Grid item xs={8}>
              <Container>
                <Card shadow={5} style={{minWidth: '600', margin: 'auto'}}>
                  <CardText>This app allows you to generate passwords randomly of any length less than 128 characters.</CardText>
                </Card>
              </Container>
            </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container>
          <Container><h2>DIGITALLY PROEFICIENT</h2></Container>
          <Grid item xs={4}>
            <Container>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle >College of Fine & Liberal Arts</CardTitle>
              </Card>
              <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
                <CardText>College of Business</CardText>
              </Card>
            </Container>
          </Grid>
          <Grid item xs={8}>
            <Container>
              <Card shadow={5} style={{minWidth: '600', margin: 'auto'}}>
                <CardText>This app allows you to generate passwords randomly of any length less than 128 characters.</CardText>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid container>
          <Container><h2>PERSONALLY PREPARED</h2></Container>
          <Grid item xs={4}>
            <Container>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle >College of Fine & Liberal Arts</CardTitle>
              </Card>
              <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
                <CardText>College of Business</CardText>
              </Card>
            </Container>
          </Grid>
          <Grid item xs={8}>
            <Container>
              <Card shadow={5} style={{minWidth: '600', margin: 'auto'}}>
                <CardText>This app allows you to generate passwords randomly of any length less than 128 characters.</CardText>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Grid container>
          <Container><h2>CAREER READY</h2></Container>
          <Grid item xs={4}>
            <Container>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle >College of Fine & Liberal Arts</CardTitle>
              </Card>
              <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
                <CardText>College of Business</CardText>
              </Card>
            </Container>
          </Grid>
          <Grid item xs={8}>
            <Container>
              <Card shadow={5} style={{minWidth: '600', margin: 'auto'}}>
                <CardText>This app allows you to generate passwords randomly of any length less than 128 characters.</CardText>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Grid container>
          <Container><h2>PERSISTENT TO GRADUATION</h2></Container>
          <Grid item xs={4}>
            <Container>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle >College of Fine & Liberal Arts</CardTitle>
              </Card>
              <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
                <CardText>College of Business</CardText>
              </Card>
            </Container>
          </Grid>
          <Grid item xs={8}>
            <Container>
              <Card shadow={5} style={{minWidth: '600', margin: 'auto'}}>
                <CardText>This app allows you to generate passwords randomly of any length less than 128 characters.</CardText>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Grid container>
          <Container><h2>FACULTY EXCELLENCE</h2></Container>
          <Grid item xs={4}>
            <Container>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle >College of Fine & Liberal Arts</CardTitle>
              </Card>
              <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
                <CardText>College of Business</CardText>
              </Card>
            </Container>
          </Grid>
          <Grid item xs={8}>
            <Container>
              <Card shadow={5} style={{minWidth: '600', margin: 'auto'}}>
                <CardText>This app allows you to generate passwords randomly of any length less than 128 characters.</CardText>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Grid container>
          <Container><h2>NEXT GENERATION LEADERS</h2></Container>
          <Grid item xs={4}>
            <Container>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle >College of Fine & Liberal Arts</CardTitle>
              </Card>
              <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
                <CardText>College of Business</CardText>
              </Card>
            </Container>
          </Grid>
          <Grid item xs={8}>
            <Container>
              <Card shadow={5} style={{minWidth: '600', margin: 'auto'}}>
                <CardText>This app allows you to generate passwords randomly of any length less than 128 characters.</CardText>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={9}>
        <Grid container>
          <Container><h2>INTERNATIONAL ENGAGEMENT</h2></Container>
          <Grid item xs={4}>
            <Container>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle >College of Fine & Liberal Arts</CardTitle>
              </Card>
              <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
                <CardText>College of Business</CardText>
              </Card>
            </Container>
          </Grid>
          <Grid item xs={8}>
            <Container>
              <Card shadow={5} style={{minWidth: '600', margin: 'auto'}}>
                <CardText>This app allows you to generate passwords randomly of any length less than 128 characters.</CardText>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={10}>
        <Grid container>
          <Container><h2>SCHOLARLY DISSEMINATION</h2></Container>
          <Grid item xs={4}>
            <Container>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle >College of Fine & Liberal Arts</CardTitle>
              </Card>
              <Card shadow={5} style={{minWidth: '450', margin: '20px'}}>
                <CardText>College of Business</CardText>
              </Card>
            </Container>
          </Grid>
          <Grid item xs={8}>
            <Container>
              <Card shadow={5} style={{minWidth: '600', margin: 'auto'}}>
                <CardText>This app allows you to generate passwords randomly of any length less than 128 characters.</CardText>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </TabPanel>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        TabIndicatorProps={{ style: {backgroundColor: 'grey', width:'100%', opacity: 0.5}}}
      >
        <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Strategic Education Partnerships" {...a11yProps(0)}></Tab>
        <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Strategic Enrollment" {...a11yProps(1)}></Tab>
        <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Undergraduate Studies" {...a11yProps(2)}></Tab>
        <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Academic Innovation" {...a11yProps(3)}></Tab>
        <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Student Affairs" {...a11yProps(4)}></Tab>
        <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Career Engaged Learning"  {...a11yProps(5)}/>
        <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Student Success"  {...a11yProps(6)}/>
        <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Faculty Success"  {...a11yProps(7)}/>
        <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Graduate Studies"  {...a11yProps(8)}/>
        <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Global Initiatives"  {...a11yProps(9)}/>
        <Tab style={{minHeight: '80px'}} label="Libraries"  {...a11yProps(10)}/>
      </Tabs>
    </div>
  );
}