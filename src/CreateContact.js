import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeform from 'form-serialize'

class CreateContact extends Component {
  handleSubmit = (e)=>{
    e.preventDefault()
    // const values = serializeform(e.target, { hash: true })
    // console.log("e.target: ", e.target)
    // console.log("serialized values: ", values)

  }
  render(){
    return (
      <div>
        <Link className="close-create-contact" to="/">Close</Link>
        <form pnSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <button>Add Contact</button>
          </div>
        </form>

      </div>
    )
  }
}

export default CreateContact
