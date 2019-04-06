import React from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'

const LinkInput = (props) => {

  return (
  <div className="App">
    <InputGroup className="mb-3 inputgroup">
      <FormControl
        className="inputfield"
        placeholder="Paste a link to shorten it"
        aria-label="Paste a link to shorten it"
        aria-describedby="link-shortener"
      />
      <InputGroup.Append>
        <Button className="button" variant="outline-secondary">SHORTEN</Button>
      </InputGroup.Append>
    </InputGroup>
  </div>
  )
}

export default LinkInput