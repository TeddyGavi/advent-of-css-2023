const Slideout = () => {
  function openPanel() {
    document.getElementById('sidePanelButton').style.width = '100%'
    document.getElementById('sidePanel').style.width = '973px'
  }

  function closePanel() {
    document.getElementById('sidePanelButton').style.width = '0'
    document.getElementById('sidePanel').style.width = '0'
  }
  return (
    <section className="flex items-center justify-between p-4">
      <div/>
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
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              id="Path_4"
              data-name="Path 4"
              d="M4.5,9H23.353"
              transform="translate(0)"
              fill="none"
              stroke="#fff"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M4.5,27H23.353"
              transform="translate(0 -8)"
              fill="none"
              stroke="#fff"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </g>
        </svg>
      </div>
      <div
        onClick={closePanel}
        id="sidePanelButton"
        className="fixed right-0 top-0 z-10 h-full overflow-x-hidden bg-transparent duration-500"
      >
        <div
          id="sidePanel"
          className="fixed right-0 top-0 z-50 flex h-full w-[973px] items-center justify-center overflow-x-hidden bg-spanishGreen font-bold text-white duration-500"
        >
          <a
            href="javascript:void(0)"
            onClick={closePanel}
            className="absolute right-0 top-0 mr-3 mt-2 text-3xl text-black"
          >
            &times;
          </a>

        </div>
      </div>
    </section>
  )
}

export default Slideout
