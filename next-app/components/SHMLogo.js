import Image from 'next/image'

const SHMLogo = () => {
  return (
    <div className='SHMLogo-container'>
      <Image
        src='/../public/shm.png'
        layout='fill'
        width="200px"
        height="200px"
      />
    </div>
  )
}

export default SHMLogo
