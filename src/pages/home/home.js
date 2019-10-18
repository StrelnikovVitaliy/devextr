import React, {useState} from 'react'
import './home.scss'
import {Button, SpeedDialAction} from 'devextreme-react'

export default () => {
  const [openedMenu, setOpenedMenu] = useState(false)

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Home</h2>

      <SpeedDialAction icon={'user'} hint={'Delete row'} position={{
        of: '#grid',
        my: 'right top',
        at: 'right top',
        offset: '-16 10'
      }}
                       onClick={() => setOpenedMenu(!openedMenu)}/>
      {openedMenu ?
        <div className={'profile_menu'}>
          <Button
            text={'Profile'}
            icon={'user'}
            stylingMode={'outlined'}
          />
          <Button
            text={'Settings'}
            icon={'preferences'}
            stylingMode={'outlined'}
          />
          <Button
            text={'Exit'}
            icon={'runner'}
            stylingMode={'outlined'}
          />
        </div> : null}
    </React.Fragment>
  )
}
