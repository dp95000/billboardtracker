import React, { Component } from 'react';

import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button, Table } from 'reactstrap';
import axios from 'axios';



class BillboardForm extends Component {
    state = {
        billboard: [],
        newBillboardData: {
          lat: '',
          latError: '',
          lon: '',
          location: '',
          size: '',
          type: '',
          avalible: '',
          sides: '',
          sign_no: '',
  
        },
        editBillboardData: {
            id:'',
          lat: '',
          lon: '',
          location: '',
          size: '',
          type: '',
          avalible: '',
          sides: '',
          sign_no: '',
        },
        NewBillboardmodal: false,
        editBillboardmodal: false
    }
    componentWillMount() {
      this._refreshBillboards();
        
    }

      toggleNewBillboardModal() {
      this.setState({
          NewBillboardmodal: ! this.state.NewBillboardmodal
      })
  
  }

    toggleEditBillboardModal() {
      this.setState({
          editBillboardmodal: ! this.state.editBillboardmodal
      })
  
  }
    addBillboard() {
      axios.post('http://localhost:3000/billboard', this.state.newBillboardData).then((response) => {
          let {billboard } = this.state
          console.log(response.data);
          this.setState({billboard, NewBillboardmodal: false,  newBillboardData: {
          lat: '',
          lon: '',
          location: '',
          size: '',
          type: '',
          avalible: '',
          sides: '',
          sign_no: '',
          }})
      })
  }

  updateBillboard() {
    let { lat, lon, location, size, type, avalible, sides, sign_no } = this.state.editBillboardData;

    axios.put('http://localhost:3000/billboard/' + this.state.editBillboardData.id, {
        lat, lon, location, size, type, avalible, sides, sign_no
    }).then((response) => {
      this._refreshBillboards();

      this.setState({
        editBillboardmodal: false, editBillboardData: {id:'', lat:'', lon:'', location:'', size:'', type:'', avalible:'', sides:'', sign_no:'' }
      })

    });
  }

  editBillboard( id, lat, lon, location, size, type, avalible, sides, sign_no) {
    this.setState({
        editBillboardData: { id, lat, lon, location, size, type, avalible, sides, sign_no }, editBillboardmodal: !this.state.editBillboardmodal
    });


}




deleteBillboard(id) {
  axios.delete('http://localhost:3000/billboard/' + id).then((response) => {
    this._refreshBillboards();
  })

}




deleteBillboard(id) {
  axios.delete('http://localhost:3000/billboard/' + id).then((response) => {
    this._refreshBillboards();
  })
}




_refreshBillboards() {
  axios.get('http://localhost:3000/billboard').then((response) => {
    this.setState({
        billboard: response.data
    })
})
}






render() {
    let billboard = this.state.billboard.map((billboard) => {
        return (
            <tr key={billboard.id}>
              <td>{billboard.id}</td>
            <td>{billboard.lat}</td>
            <td>{billboard.lon}</td>
            <td>{billboard.location}</td>
            <td>{billboard.size}</td>
            <td>{billboard.type}</td>
            <td>{billboard.avalible}</td>
            <td>{billboard.sides}</td>
            <td>{billboard.sign_no}</td>
        

            <td>Billboards</td>
            <td>
                <Button color="success" size="sm" className="mr-2" onClick={this.editBillboard.bind(this, billboard.id, billboard.lat, billboard.lon, billboard.location, billboard.size, billboard.type, billboard.avalible, billboard.sides, billboard.sign_no)}>Edit</Button>
                <Button color="danger" size="sm" onClick={this.deleteBillboard.bind(this, billboard.id, billboard.lat, billboard.lon, billboard.location, billboard.size, billboard.type, billboard.avalible, billboard.sides, billboard.sign_no)}>Delete</Button>
            </td>
        </tr>
        )
    })

  
    return (
        <div className="App container">

            <h1>Billboards</h1>
             
  <Button className="my-3" onClick={this.toggleNewBillboardModal.bind(this)}> Add Billboard</Button>
  <Modal isOpen={this.state.NewBillboardmodal} toggle={this.toggleNewBillboardModal.bind(this)}>
    <ModalHeader toggle={this.toggle}>Add billboard</ModalHeader>
    <ModalBody>
    <FormGroup>
    <Label for="lat">lat</Label>
    <Input id="lat"  value={this.state.newBillboardData.lat} onChange={(e) => {
        let { newBillboardData }= this.state;
        newBillboardData.lat = e.target.value;
        this.setState({ newBillboardData })
     }}  required/>
    </FormGroup>
    <FormGroup>
    <Label for="lon">lon</Label>
    <Input id="lon"  value={this.state.newBillboardData.lon} onChange={(e) => {
        let { newBillboardData }= this.state;
        newBillboardData.lon = e.target.value;
        this.setState({ newBillboardData })
     }}  />
    </FormGroup>
    <FormGroup>
    <Label for="location">location</Label>
    <Input id="location"  value={this.state.newBillboardData.location} onChange={(e) => {
        let { newBillboardData }= this.state;
        newBillboardData.location = e.target.value;
        this.setState({ newBillboardData })
     }}  />
    </FormGroup>
    <FormGroup>
    <Label for="size">size</Label>
    <Input id="size"  value={this.state.newBillboardData.size} onChange={(e) => {
        let { newBillboardData }= this.state;
        newBillboardData.size = e.target.value;
        this.setState({ newBillboardData })
     }}  />
    </FormGroup>
    <FormGroup>
    <Label for="type">type</Label>
    <Input id="type"  value={this.state.newBillboardData.type} onChange={(e) => {
        let { newBillboardData }= this.state;
        newBillboardData.type = e.target.value;
        this.setState({ newBillboardData })
     }}  />
    </FormGroup>
    
    <FormGroup>
    <Label for="avalible">avalible</Label>
    <Input id="avalible"  value={this.state.newBillboardData.avalible} onChange={(e) => {
        let { newBillboardData }= this.state;
        newBillboardData.avalible = e.target.value;
        this.setState({ newBillboardData })
     }}  />
    </FormGroup>
    <FormGroup>
    <Label for="sides">sides</Label>
    <Input id="sides"  value={this.state.newBillboardData.sides} onChange={(e) => {
        let { newBillboardData }= this.state;
        newBillboardData.sides = e.target.value;
        this.setState({ newBillboardData })
     }}  />
    </FormGroup>
    <FormGroup>
    <Label for="sign_no">sign_no</Label>
    <Input id="sign_no"  value={this.state.newBillboardData.sign_no} onChange={(e) => {
        let { newBillboardData }= this.state;
        newBillboardData.sign_no = e.target.value;
        this.setState({ newBillboardData })
     }}  />
    </FormGroup>
    
      
    

    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={this.addBillboard.bind(this)}>Add Billboard</Button>{' '}
      <Button color="secondary" onClick={this.toggleEditBillboardModal.bind(this)}>Cancel</Button>
    </ModalFooter>
  </Modal>

  <Modal isOpen={this.state.editBillboardmodal} toggle={this.toggleEditBillboardModal.bind(this)}>
    <ModalHeader toggle={this.toggle}>Edit Billboard</ModalHeader>
    <ModalBody>
    <FormGroup>
    <Label for="lat">lat</Label>
    <Input id="lat"  value={this.state.editBillboardData.lat} onChange={(e) => {
        let { editBillboardData }= this.state;
        editBillboardData.lat = e.target.value;
        this.setState({ editBillboardData })
     }}  />
    </FormGroup>
    <FormGroup>
    <Label for="lon">lon</Label>
    <Input id="lon"  value={this.state.editBillboardData.lon} onChange={(e) => {
        let { editBillboardData }= this.state;
        editBillboardData.lon = e.target.value;
        this.setState({ editBillboardData })
     }}  />
    </FormGroup>
    <FormGroup>
    <Label for="location">location</Label>
    <Input id="location"  value={this.state.editBillboardData.location} onChange={(e) => {
        let { editBillboardData }= this.state;
        editBillboardData.location = e.target.value;
        this.setState({ editBillboardData })
     }}  />
    </FormGroup>
    <FormGroup>
    <Label for="size">size</Label>
    <Input id="size"  value={this.state.editBillboardData.size} onChange={(e) => {
        let { editBillboardData }= this.state;
        editBillboardData.size = e.target.value;
        this.setState({ editBillboardData })
     }}  />
    </FormGroup>
    <FormGroup>
    <Label for="type">type</Label>
    <Input id="type"  value={this.state.editBillboardData.type} onChange={(e) => {
        let {editBillboardData} = this.state;
        editBillboardData.type = e.target.value;
        this.setState({ editBillboardData })
    }}
        />
    </FormGroup>
    
    <FormGroup>
    <Label for="avalible">avalible</Label>
    <Input id="avalible"  value={this.state.editBillboardData.avalible} onChange={(e) => {
        let {editBillboardData} = this.state;
        editBillboardData.avalible = e.target.value;
        this.setState({ editBillboardData })
    }}
        />
    </FormGroup>
    <FormGroup>
    <Label for="sides">sides</Label>
    <Input id="sides"  value={this.state.editBillboardData.sides} onChange={(e) => {
        let {editBillboardData} = this.state;
        editBillboardData.sides = e.target.value;
        this.setState({ editBillboardData })
    }}
        />
    </FormGroup>
    <FormGroup>
    <Label for="sign_no">sign_no</Label>
    <Input id="sign_no"  value={this.state.editBillboardData.sign_no} onChange={(e) => {
        let {editBillboardData} = this.state;
        editBillboardData.sign_no = e.target.value;
        this.setState({ editBillboardData })
    }}
        />
    </FormGroup>
    
      
    

    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={this.updateBillboard.bind(this)}>Update Billboard</Button>{' '}
      <Button color="secondary" onClick={this.toggleEditBillboardModal.bind(this)}>Cancel</Button>
    </ModalFooter>
  </Modal>

            <Table>
                <thead>
                    <tr>
                      <th>Id</th>
                        <th>lat</th>
                        <th>lon</th>
                        <th>location</th>
                        <th>size</th>
                        <th>type</th>
                        <th>avalible</th>
                        <th>signs_rented</th>
                        <th>sides</th>
                        <th>sign_no</th>
                        


                    </tr>
                </thead>

                <tbody>
                  {billboard}
                </tbody>
            </Table>
         



        </div>
    )
}


 }

export default BillboardForm;