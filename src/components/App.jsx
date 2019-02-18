import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import MySampleImage from '../assets/images/testimage.png';
import MyAnotherTestImage from '../assets/images/testwide.png';
import NewTicketControl from './NewTicketControl';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }
  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render(){
    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
      <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
      <Route component={Error404} />
      </Switch>
      </div>
    );
  }

}

export default App;
