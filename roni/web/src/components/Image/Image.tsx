const Image = ({id}) => {
  return (
    <div>
     <img src={`/avatar-placeholders/${id}`} alt="avatar" className="rounded-full h-16 w-16 border-white border-2" />
    </div>
  )
}

export default Image
