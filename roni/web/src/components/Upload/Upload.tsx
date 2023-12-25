import Icon from "../Icon/Icon"

const Upload = () => {
  return (
    <div className="flex h-[100px] w-full items-center border-[6px] border-dashed border-white px-8 text-white">
      <label htmlFor="upload" className="flex flex-1 items-center text-3xl text-white">
        Avatar

      <input type='file' id='upload' accept="img/png, img/jpeg" className="hidden"/>
      <div className="text-lg flex-1 text-center font-sans normal-case tracking-normal text-[#CAE3D7]">Drag & Drop</div>
      </label>
      <Icon id='upload' size={32}/>
    </div>
  )
}

export default Upload
