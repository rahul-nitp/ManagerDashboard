import React from "react";
import { fireBaseApp } from "../firebase";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

import TableCards from '../components/tableCards'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        fireBaseApp.signOut()
    }

    renderData(manData){
      return(
        
        manData.members.map(members =>
          <TableRow key ={members.id}>

          <TableCell id='pending-cell'>{members.name}
          </TableCell> 

          <TableCell>
            <TableCards data= {members.tasks} condition="Pending"/>
           </TableCell>

           <TableCell>
             <TableCards data= {members.tasks} condition="In Progress"/>
            </TableCell>
            
            <TableCell>
            <TableCards data= {members.tasks} condition="Completed"/>
             </TableCell>

             <TableCell>
             <TableCards data= {members.tasks} condition="Approved"/>
              </TableCell>
              
          </TableRow>
        )

        
      )
    }
    render() {
        return (
            <div>
                <h1> Dashboard </h1>
                <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        Members
                      </TableCell>
                      <TableCell>
                        Pending 
                      </TableCell>
                      <TableCell>
                        In Progess
                      </TableCell>
                      <TableCell>
                        Completed
                      </TableCell>
                      <TableCell>
                      Approved
                    </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.managerData.map(this.renderData)}
                  </TableBody>
                </Table>
              </Paper>
              
                
                <Button size="large" id="logout" variant="contained" color="primary"     onClick={this.handleClick} > Logout </Button>
            </div>
        )
    }
}

function mapStateToProps ({managerData}) {
    return {managerData: managerData} 
  }
  
  export default connect(mapStateToProps)(Home)