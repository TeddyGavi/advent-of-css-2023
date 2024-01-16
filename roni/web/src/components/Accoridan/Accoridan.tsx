import Card from '../Card/Card'
import Icon from '../Icon/Icon'

const Accoridan = () => {
  return (
    <div className="">
      <details className="mb-3 w-full cursor-pointer">
        <summary className="text-dark flex w-full justify-between px-4 py-3 uppercase text-white ">
          failed to RSVP
          <div className="h-1 my-auto grow bg-white"></div><Icon id="chevron" />
        </summary>
        <Card
          avatar={{ avatar: '/images/avatar-01.png' }}
          name="George"
          email="ollie@ollie.com"
          isCloseShowing={true}
        />
      </details>
      <details className="mb-3 w-full cursor-pointer">
        <summary className="text-dark flex w-full justify-between px-4 py-3 uppercase text-white ">
        declined to participate
          <div className="h-1 my-auto grow bg-white"></div><Icon id="chevron" />
        </summary>
        <Card
          avatar={{ avatar: '/images/avatar-01.png' }}
          name="George"
          email="ollie@ollie.com"
          isCloseShowing={true}
        />
      </details>
    </div>
  )
}

export default Accoridan
