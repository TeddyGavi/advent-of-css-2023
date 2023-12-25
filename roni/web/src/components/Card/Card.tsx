import Avatar from "../Avatar/Avatar"
import Icon from "../Icon/Icon"

const Card = ({ avatar, isCloseShowing, name, email }) => {
  return (
    <div className="relative bg-white py-6 ml-5 pl-[72px] pr-5 w-[calc(100%-20px)]">
     {isCloseShowing && (<button className="absolute right-8 top-8 text-bombay"><Icon id="close"/></button>)}
     <div className="absolute -left-5 top-4">
      <Avatar {...avatar} />
     </div>
     <div>
      <div className="font-sans text-3xl font-bold tracking-tight">{name}</div>
      <div className="tracking-tight">{email}</div>
     </div>
    </div>
  )
}

export default Card
