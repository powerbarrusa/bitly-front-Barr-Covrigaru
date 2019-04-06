import React from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'

const LinkInput = (props) => {

  return (
  <div className="App">
    <InputGroup className="mb-3 input_button">
      <FormControl
        placeholder="Paste a link to shorten it"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary">Button</Button>
      </InputGroup.Append>
    </InputGroup>
  </div>
  )
}

export default LinkInput