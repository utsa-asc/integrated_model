import React from 'react';
import { Grid, Card, CardTitle, CardText } from 'react-mdl';
import { Container, Tabs, Tab, Box, Typography, makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{backgroundColor:'orange'}}
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
    '&$selected': {
      backgroundColor: '#0c2340',
      fontWeight: theme.typography.fontWeightMedium
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
  tabs: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    margin: '50px'
  },
}));

export default function Trial() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabPanel value={value} index={0}>
        <Grid container>
          <Container><p>Strategic Education Partnerships</p><h2>GREATER ACCESS</h2></Container>
          <Grid item xs={4}>
            <Container>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardText>College of Fine & Liberal Arts</CardText>
              </Card>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardText>College of Business</CardText>
              </Card>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardText>College of Business</CardText>
              </Card>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
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
      >
        <Tab style={{borderBottom:`1px solid`}} label="Strategic Education Partnerships" {...a11yProps(0)}></Tab>
        <Tab style={{borderBottom:`1px solid`, backgroundColor:'yellow'}} label="Strategic Enrollment" {...a11yProps(1)}></Tab>
        <Tab style={{borderBottom:`1px solid`, backgroundColor:'blue'}} label="Undergraduate Studies" {...a11yProps(2)}></Tab>
        <Tab label="Academic Innovation" {...a11yProps(3)}></Tab>
        <Tab label="Student Affairs" {...a11yProps(4)}></Tab>
        <Tab label="Career Engaged Learning"  {...a11yProps(5)}/>
        <Tab label="Student Success"  {...a11yProps(6)}/>
        <Tab label="Faculty Success"  {...a11yProps(7)}/>
        <Tab label="Graduate Studies"  {...a11yProps(8)}/>
        <Tab label="Global Initiatives"  {...a11yProps(9)}/>
        <Tab label="Libraries"  {...a11yProps(10)}/>
      </Tabs>
    </div>
  );
}