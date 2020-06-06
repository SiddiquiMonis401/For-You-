import React, { memo, useState } from 'react'
import { Button as BootstrapButton, Table, Form } from 'react-bootstrap'
import { GiCancel } from 'react-icons/gi'
import { useDisptach, useSelector } from 'react-redux'

// styles
import './styles/ButtonsStyles.scss'
import './styles/dashboard.scss'

// images
import profile from 'assets/images/user-profile.png'
import edit from 'assets/images/edit-icon.svg'
import share from 'assets/images/share-icon.svg'
import trash from 'assets/images/trash-icon.svg'
import phone from 'assets/images/phone.svg'
import envelope from 'assets/images/envelope.svg'

// Components
import UserForm from './UserForm'
import { Button } from './common'

function Dashboard () {
  const [displayUserInfo, setDisplayUserInfo] = useState(false)
  const [displayUserForm, setDisplayUserForm] = useState(false)
  const userData = useSelector(state => state.UserReducer)
  console.log(userData)
  // FormDisplayHandler
  const FormHandler = () => {
    setDisplayUserForm(false)
  }

  return (
    <>
      {displayUserForm && <UserForm onClick={FormHandler} />}
      <div className='content-area'>
        <div className='pt-4 d-flex justify-content-between align-items-center mb-4'>
          <h2 className='mb-0'>Users List</h2>
          <BootstrapButton
            variant='primary pt-2'
            onClick={() => setDisplayUserForm(true)}
          >
            {' '}
            Add New
          </BootstrapButton>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>User</th>
              <th>Cloth type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {userData.map(({ name, email, contactNumber, clothType, id }) => (
              <tr key={id}>
                <td>
                  <div className='d-flex align-items-center'>
                    <img src={profile} alt='' width='50' height='50' />
                    <div className='pl-3'>
                      <h4 className='mb-0'>{name}</h4>
                      <span>{email}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className='item-container'>{clothType}</span>
                </td>
                <td>4 April 2020</td>
                <td>
                  <a href='#test'>{contactNumber}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {displayUserInfo && (
        <div className='user-overlay'>
          <div className='user-list'>
            <div className='clear-wrapper d-flex justify-content-end'>
              <Button
                onClick={() => {
                  setDisplayUserInfo(false)
                }}
                icon={<GiCancel />}
              />
            </div>
            {/* // */}
            <div className='user-detail d-flex justify-content-between align-items-center'>
              <div className='d-flex'>
                <div className='mr-3'>
                  <img src={profile} alt='' width='60' height='60' />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                  <h4 className='mb-0'>Name Surname</h4>
                  <span>@johndoe</span>
                </div>
              </div>
              <div>
                <a href='#test'>
                  <img src={edit} alt='Edit Icon' />
                </a>
                <a href='#test'>
                  <img src={share} alt='Share Icon' />
                </a>
                <a href='#test'>
                  <img src={trash} alt='Trash Icon' />
                </a>
              </div>
            </div>
            {/* // */}
            <div className='contact-info'>
              <h3>Contact info:</h3>
              <div className='d-flex'>
                <img src={phone} alt='Phone Icon' />
                <span>+92 345 67890</span>
              </div>
              <div className='d-flex'>
                <img src={envelope} alt='Envelope Icon' />
                <span>user@gmail.com</span>
              </div>
            </div>
            {/* // */}
            <div className='clothe-detail mb-5'>
              <Form.Group
                className='mb-5'
                controlId='exampleForm.ControlSelect1'
              >
                <Form.Control as='select'>
                  <option>Sharwani</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <h3>Clothe Detail:</h3>
              <div className='d-flex'>
                <div className='details'>
                  <h5>Clothe No:</h5>
                  <div className='d-flex align-items-center'>D29472bs3</div>
                </div>
                <div className='details'>
                  <h5>Clothe Color:</h5>
                  <div className='d-flex align-items-center'>
                    Navy Blue
                    <span className='select-color' />
                  </div>
                </div>
                <div className='details'>
                  <h5>Clothe Size:</h5>
                  <div className='d-flex align-items-center'>4.5 Metro</div>
                </div>
              </div>
            </div>
            {/* // */}
            <div className='clothe-measurement'>
              <h3>Clothe Measurement:</h3>
              <div className='d-flex'>
                <div className='left-container'>
                  <div className='d-flex justify-content-between'>
                    Length
                    <span>39</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    Waist
                    <span>37</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    Bottem
                    <span>19</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    Knee
                    <span>00</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    Thigh
                    <span>29</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    Shoulder
                    <span>19</span>
                  </div>
                </div>
                <div className='right-container'>
                  <div className='d-flex'>Long Belt</div>
                  <div className='d-flex'>2 Side Pocket</div>
                  <div className='d-flex'>Grip</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default memo(Dashboard)
