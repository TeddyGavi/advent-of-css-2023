import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { WishlistFieldProps } from '../WishlistField/WishlistField'

type WishlistItem = {
  number: number
  name: string
  url: string
}

type SlideoutProps = {
  wishlist: WishlistItem[]
}

const Slideout: React.FC<SlideoutProps> = ({ wishlist }) => {
  function openPanel() {
    document.getElementById('sidePanelButton').style.width = '100%'
    document.getElementById('sidePanel').style.width = '973px'
  }

  function closePanel() {
    document.getElementById('sidePanelButton').style.width = '0'
    document.getElementById('sidePanel').style.width = '0'
  }

  const [previewData, setPreviewData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const proxyUrl = 'https://getlinkpreview.onrender.com/?url='
        const targetUrl = url
        const response = await fetch(proxyUrl + targetUrl)
        const data = await response.json()
        console.log('data', data)

        setPreviewData((prevData) => [
          ...prevData,
          {
            title: data.title,
            description: data.description,
            image: data.image,
            storeUrl: data.ogUrl
          },
        ])
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    // Clear previewData before fetching new data
    setPreviewData([])
    wishlist.forEach((item) => fetchData(item.url))
    console.log('wishlist', wishlist)
  }, [wishlist])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!previewData) {
    return <div>No data</div>
  }
  {
    console.log(previewData)
  }
  return (
    <section className="flex items-center justify-between p-4">
      <div />
      <div onClick={openPanel}>
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="18.853"
          height="12"
          viewBox="0 0 18.853 12"
        >
          <g
            id="Icon_feather-menu"
            data-name="Icon feather-menu"
            transform="translate(-4.5 -8)"
          >
            <path
              id="Path_3"
              data-name="Path 3"
              d="M4.5,18H23.353"
              transform="translate(0 -4)"
              fill="none"
              stroke="#fff"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_4"
              data-name="Path 4"
              d="M4.5,9H23.353"
              transform="translate(0)"
              fill="none"
              stroke="#fff"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M4.5,27H23.353"
              transform="translate(0 -8)"
              fill="none"
              stroke="#fff"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
      <div
        // onClick={closePanel}
        id="sidePanelButton"
        className="fixed right-0 top-0 z-10 h-full overflow-x-hidden bg-transparent duration-500"
      >
        <div
          id="sidePanel"
          className="fixed right-0 top-0 z-50 flex h-full w-[973px] items-center justify-center overflow-x-hidden bg-spanishGreen font-bold  duration-500"
        >
          <div>
            <a
              href="#"
              onClick={closePanel}
              className="absolute right-0 top-0 mr-3 mt-2 text-3xl text-black"
            >
              &times;
            </a>
            <div className="flex w-[794px] items-center gap-8 ">
              <p className="text-white">For:</p>
              <Card
                avatar={{ avatar: '/images/avatar-01.png' }}
                name="George"
                email="ollie@ollie.com"
                isCloseShowing={true}
              />
            </div>
            <div>
              <div className="my-8 w-[794px] pl-16">
                {wishlist &&
                  wishlist.map((item, index) => (
                    <div key={index}>
                      <div className="my-8 flex justify-between   text-white">
                        <div className="flex gap-2 ">
                          {' '}
                          <p className=" 3xl">{item.number}</p>
                          <p className=" 3xl">{item.name}</p>
                        </div>
                        <a
                          href={item.url}
                          className="rounded-full bg-cruseo px-[12px] py-[2px] uppercase"
                        >
                          Details
                        </a>
                      </div>
                      {previewData[index] && (
                        <div className='mb-8 flex items-center gap-8 text-white border-2 border-silverTree'>
                          <div className='p-4'>
                          <p className='mb-2'>{previewData[index].storeUrl}</p>
                            <h3 className='mb-2'>{previewData[index].title}</h3>
                            <p>{previewData[index].description}</p>
                          </div>
                          <div>
                            <img src={previewData[index].image} alt="" className='w-[380px] '/>
                          </div>
                        </div>
                      )}
                      <hr />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slideout
