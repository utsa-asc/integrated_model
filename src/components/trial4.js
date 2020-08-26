import React from 'react';
import { Grid, Card, CardTitle, CardText } from 'react-mdl';
import { Container, Tabs, Tab, Box, Typography, Divider } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

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
    height: '100vh'
  },
  drawerPaper: {
    width: "200px",
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: "200px",
      flexShrink: 0,
    },
  },
  tabs: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    height: '100vh',
    // margin: '50px',
    position: 'center',
    backgroundColor: '#0c2340',
    color: 'white'
    // '#0c2340'
  },
  collegeTabs: {
    paddingTop: `2.5rem`,
    backgroundColor: '#FFFFFF',
    color: '#0c2340'
  },
  paper: {
    border: `3px solid #000`
  }
}));

export default function Trial4() {

  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
          <ListItem>All mail</ListItem>
          <ListItem>Trash</ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      
      <Grid item xs>
        <Grid container>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              // container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        </Grid>
        <TabPanel value={value} index={0}>
                <span>Academic Affairs</span>
                <h2>TAG LINE GOES HERE</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <h3>Org Chart/VP Area Support Illustration Goes Here</h3>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>Strategic Education Partnerships</span>
                <h2>GREATER ACCESS</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>Strategic Enrollment</span>
                <h2>INCREASED ENROLLMENT</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>Undergraduate Studies</span>
                <h2>HIGH QUALITY PROGRAMS</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>Academic Innovation</span>
                <h2>DIGITALLY PROEFICIENT</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>Student Affairs</span>
                <h2>PERSONALLY PREPARED</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>Career Engaged Learning</span>
                <h2>CAREER READY</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>Student Success</span>
                <h2>PERSISTENT TO GRADUATION</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={8}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>Faculty Success</span>
                <h2>FACULTY EXCELLENCE</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={9}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>Graduate Studies</span>
                <h2>NEXT GENERATION LEADERS</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>

        </TabPanel>
        <TabPanel value={value} index={10}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>Global Initiatives</span>
                <h2>INTERNATIONAL ENGAGEMENT</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={11}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>Libraries</span>
                <h2>SCHOLARLY DISSEMINATION</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
      </Grid>
      <Grid item xs>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          TabIndicatorProps={{ style: {backgroundColor: 'grey', width:'100%', opacity: 0.5}}}
        >
          <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Academic Affairs VP Areas" {...a11yProps(0)}></Tab>
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
      </Grid>
    </div>
  );
}
