import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'






function Searchbar() {
    return(
<InputGroup className="mb-3">
    <FormControl
      placeholder="Zipcode"
      aria-label="Zipcode"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2">
      Button
    </Button>
  </InputGroup>
    )
};
export default Searchbar;