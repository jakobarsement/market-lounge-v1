import Stormtrooper from 'icons/Stormtrooper'
import { MouseEventHandler } from 'react'
import './Avatar.scss'

const Avatar = ({ image, onClick }: { image?: string; onClick?: MouseEventHandler }) => {
  return (
    <div onClick={onClick}>
      {image ? <img src={image} alt="avatar" /> : <Stormtrooper alt="avatar" fill={'#2c3535'} />}
    </div>
  )
}
export default Avatar
