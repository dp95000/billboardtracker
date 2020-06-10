import React, { Component } from 'react';

import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button, Table } from 'reactstrap';
import axios from 'axios';

class Clientform extends Component {
    state = {
        customers: [],
        newCustomerData: {
          First_name: '',
          Last_name: '',
          business_name: '',
          bill_address: '',
          phone: '',
          number_signs: '',
          signs_rented: '',
          contract_term: '',
          monthly_rent: '',
          delinquent_account: '',
          past_due_payments: ''
        },
        editCustomerData: {
          id: '',
          First_name: '',
          Last_name: '',
          business_name: '',
          bill_address: '',
          phone: '',
          number_signs: '',
          signs_rented: '',
          contract_term: '',
          monthly_rent: '',
          delinquent_account: '',
          past_due_payments: ''
        },
        NewCustomermodal: false,
        editCustomermodal: false,

        
    }

    componentWillMount() {
      this._refreshClients();
        
    }
    
    toggleNewCustomerModal() {
        this.setState({
            NewCustomermodal: ! this.state.NewCustomermodal
        })
    // this.state.NewCustomermodal = true;
    }
  

    toggleEditCustomerModal() {
        this.setState({
            editCustomermodal: ! this.state.editCustomermodal
        })
    // this.state.NewCustomermodal = true;
    }
  

    addClient() {
        axios.post('http://localhost:3000/customers', this.state.newCustomerData).then((response) => {
            let {customers } = this.state
            console.log(response.data);
            this.setState({customers, NewCustomermodal: false,  newCustomerData: {
                First_name: '',
                Last_name: '',
                business_name: '',
                bill_address: '',
                phone: '',
                number_signs: '',
                signs_rented: '',
                contract_term: '',
                monthly_rent: '',
                delinquent_account: '',
                past_due_payments: ''
            }})
        })
    }

  

    updateClient() {
      let { First_name, Last_name, business_name, bill_address, phone, number_signs, signs_rented, contract_term, monthly_rent, delinquent_account, past_due_payments } = this.state.editCustomerData;

      axios.put('http://localhost:3000/customers/' + this.state.editCustomerData.id, {
        First_name, Last_name, business_name, bill_address, phone, number_signs, signs_rented, contract_term, monthly_rent, delinquent_account, past_due_payments
      }).then((response) => {
        this._refreshClients();

        this.setState({
          editCustomermodal: false, editCustomerData: {id: '', First_name: '', Last_name: '', business_name: '', bill_address: '', phone: '', number_signs: '', signs_rented: '', contract_term: '', monthly_rent: '', delinquent_account: '', past_due_payments: '' }
        })

      });
    }

    

    editCustomer( id, First_name, Last_name, business_name, bill_address, phone, number_signs, signs_rented, contract_term, monthly_rent, delinquent_account, past_due_payments) {
        this.setState({
            editCustomerData: { id, First_name, Last_name, business_name, bill_address, phone, number_signs, signs_rented, contract_term, monthly_rent, delinquent_account, past_due_payments }, editCustomermodal: !this.state.editCustomermodal
        });

    }

  

    deleteCustomer(id) {
      axios.delete('http://localhost:3000/customers/' + id).then((response) => {
        this._refreshClients();
      })
    }

    
    
    _refreshClients() {
      axios.get('http://localhost:3000/customers').then((response) => {
        this.setState({
            customers: response.data
        })
    })
    }

    

    

    
    render() {
        let customers = this.state.customers.map((customers) => {
            return (
                <tr key={customers.id}>
                  <td>{customers.id}</td>
                <td>{customers.First_name}</td>
                <td>{customers.Last_name}</td>
                <td>{customers.business_name}</td>
                <td>{customers.bill_address}</td>
                <td>{customers.phone}</td>
                <td>{customers.number_signs}</td>
                <td>{customers.signs_rented}</td>
                <td>{customers.contract_term}</td>
                <td>{customers.monthly_rent}</td>
                <td>{customers.delinquent_account}</td>
                <td>{customers.past_due_payments}</td>

                <td>Client</td>
                <td>
                    <Button color="success" size="sm" className="mr-2" onClick={this.editCustomer.bind(this, customers.id, customers.First_name, customers.Last_name, customers.business_name, customers.bill_address, customers.phone, customers.number_signs, customers.signs_rented, customers.contract_term, customers.monthly_rent, customers.delinquent_account, customers.past_due_payments)}>Edit</Button>
                    <Button color="danger" size="sm" onClick={this.deleteCustomer.bind(this, customers.id, customers.First_name, customers.Last_name, customers.business_name, customers.bill_address, customers.phone, customers.number_signs, customers.signs_rented, customers.contract_term, customers.monthly_rent, customers.delinquent_account, customers.past_due_payments)}>Delete</Button>
                </td>
            </tr>
            )
        })

      
        return (
            <div className="App container">

                <h1>Clients</h1>
                 
      <Button className="my-3" onClick={this.toggleNewCustomerModal.bind(this)}>Add Client</Button>
      <Modal isOpen={this.state.NewCustomermodal} toggle={this.toggleNewCustomerModal.bind(this)}>
        <ModalHeader toggle={this.toggle}>Add client</ModalHeader>
        <ModalBody>
        <FormGroup>
        <Label for="First_name">First_name</Label>
        <Input id="First_name"  value={this.state.newCustomerData.First_name} onChange={(e) => {
            let { newCustomerData }= this.state;
            newCustomerData.First_name = e.target.value;
            this.setState({ newCustomerData })
         }}  />
        </FormGroup>
        <FormGroup>
        <Label for="Last_name">Last_name</Label>
        <Input id="Last_name"  value={this.state.newCustomerData.Last_name} onChange={(e) => {
            let {newCustomerData} = this.state;
            newCustomerData.Last_name = e.target.value;
            this.setState({ newCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="business_name">business_name</Label>
        <Input id="business_name"  value={this.state.newCustomerData.business_name} onChange={(e) => {
            let {newCustomerData} = this.state;
            newCustomerData.business_name = e.target.value;
            this.setState({ newCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="bill_address">bill_address</Label>
        <Input id="bill_address"  value={this.state.newCustomerData.bill_address} onChange={(e) => {
            let {newCustomerData} = this.state;
            newCustomerData.bill_address = e.target.value;
            this.setState({ newCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="phone">phone</Label>
        <Input id="phone"  value={this.state.newCustomerData.phone} onChange={(e) => {
            let {newCustomerData} = this.state;
            newCustomerData.phone = e.target.value;
            this.setState({ newCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="number_signs">number_signs</Label>
        <Input id="number_signs"  value={this.state.newCustomerData.number_signs} onChange={(e) => {
            let {newCustomerData} = this.state;
            newCustomerData.number_signs = e.target.value;
            this.setState({ newCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="signs_rented"> signs_rented</Label>
        <Input id="signs_rented" value={this.state.newCustomerData.signs_rented} onChange={(e) => {
            let {newCustomerData} = this.state;
            newCustomerData.signs_rented = e.target.value;
            this.setState({ newCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="contract_term"> contract_term</Label>
        <Input id="contract_term" value={this.state.newCustomerData.contract_term} onChange={(e) => {
            let {newCustomerData} = this.state;
            newCustomerData.contract_term = e.target.value;
            this.setState({ newCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for=" monthly_rent"> monthly_rent</Label>
        <Input id=" monthly_rent"  value={this.state.newCustomerData.monthly_rent} onChange={(e) => {
            let {newCustomerData} = this.state;
            newCustomerData.monthly_rent = e.target.value;
            this.setState({ newCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for=" delinquent_account"> delinquent_account</Label>
        <Input id=" delinquent_account"  value={this.state.newCustomerData.delinquent_account} onChange={(e) => {
            let {newCustomerData} = this.state;
            newCustomerData.delinquent_account = e.target.value;
            this.setState({ newCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="past_due_payments">  past_due_payments</Label>
        <Input id="past_due_payments"  value={this.state.newCustomerData.past_due_payments} onChange={(e) => {
            let {newCustomerData} = this.state;
            newCustomerData.past_due_payments = e.target.value;
            this.setState({ newCustomerData })
        }}
            />
        </FormGroup>
          
        

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.addClient.bind(this)}>Add Client</Button>{' '}
          <Button color="secondary" onClick={this.toggleEditCustomerModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={this.state.editCustomermodal} toggle={this.toggleEditCustomerModal.bind(this)}>
        <ModalHeader toggle={this.toggle}>Edit client</ModalHeader>
        <ModalBody>
        <FormGroup>
        <Label for="First_name">First_name</Label>
        <Input id="First_name"  value={this.state.editCustomerData.First_name} onChange={(e) => {
            let { editCustomerData }= this.state;
            editCustomerData.First_name = e.target.value;
            this.setState({ editCustomerData })
         }}  />
        </FormGroup>
        <FormGroup>
        <Label for="Last_name">Last_name</Label>
        <Input id="Last_name"  value={this.state.editCustomerData.Last_name} onChange={(e) => {
            let {editCustomerData} = this.state;
            editCustomerData.Last_name = e.target.value;
            this.setState({ editCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="business_name">business_name</Label>
        <Input id="business_name"  value={this.state.editCustomerData.business_name} onChange={(e) => {
            let {editCustomerData} = this.state;
            editCustomerData.business_name = e.target.value;
            this.setState({ editCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="bill_address">bill_address</Label>
        <Input id="bill_address"  value={this.state.editCustomerData.bill_address} onChange={(e) => {
            let {editCustomerData} = this.state;
            editCustomerData.bill_address = e.target.value;
            this.setState({ editCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="phone">phone</Label>
        <Input id="phone"  value={this.state.editCustomerData.phone} onChange={(e) => {
            let {editCustomerData} = this.state;
            editCustomerData.phone = e.target.value;
            this.setState({ editCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="number_signs">number_signs</Label>
        <Input id="number_signs"  value={this.state.editCustomerData.number_signs} onChange={(e) => {
            let {editCustomerData} = this.state;
            editCustomerData.number_signs = e.target.value;
            this.setState({ editCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="signs_rented">signs_rented</Label>
        <Input id="signs_rented"  value={this.state.editCustomerData.signs_rented} onChange={(e) => {
            let {editCustomerData} = this.state;
            editCustomerData.signs_rented = e.target.value;
            this.setState({ editCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="contract_term">contract_term</Label>
        <Input id="contract_term"  value={this.state.editCustomerData.contract_term} onChange={(e) => {
            let {editCustomerData} = this.state;
            editCustomerData.contract_term = e.target.value;
            this.setState({ editCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="monthly_rent">monthly_rent</Label>
        <Input id="monthly_rent"  value={this.state.editCustomerData.monthly_rent} onChange={(e) => {
            let {editCustomerData} = this.state;
            editCustomerData.monthly_rent = e.target.value;
            this.setState({ editCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="delinquent_account">delinquent_account</Label>
        <Input id="delinquent_account"  value={this.state.editCustomerData.delinquent_account} onChange={(e) => {
            let {editCustomerData} = this.state;
            editCustomerData.delinquent_account = e.target.value;
            this.setState({ editCustomerData })
        }}
            />
        </FormGroup>
        <FormGroup>
        <Label for="past_due_payments">past_due_payments</Label>
        <Input id="past_due_payments"  value={this.state.editCustomerData.past_due_payments} onChange={(e) => {
            let {editCustomerData} = this.state;
            editCustomerData.past_due_payments = e.target.value;
            this.setState({ editCustomerData })
            
        }}
            />
        </FormGroup>
          
        

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.updateClient.bind(this)}>Update Client</Button>{' '}
          <Button color="secondary" onClick={this.toggleEditCustomerModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    
                <Table>
                    <thead>
                        <tr>
                          <th>Id</th>
                            <th>First_name</th>
                            <th>Last_name</th>
                            <th>business_name</th>
                            <th>bill_address</th>
                            <th>phone</th>
                            <th>number_signs</th>
                            <th>signs_rented</th>
                            <th>contract_term</th>
                            <th>monthly_rent</th>
                            <th>delinquent_account</th>
                            <th>past_due_payments</th>


                        </tr>
                    </thead>

                    <tbody>
                      {customers}
                    </tbody>
                </Table>
             
            </div>
        )
    }
}

export default Clientform;
