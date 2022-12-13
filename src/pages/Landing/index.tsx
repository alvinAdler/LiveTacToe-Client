import WaveFooter from '../../assets/footer-wave.svg'

import MenuCard from "./MenuCard"

const Landing = () => {

  const handleJoinRoom = (roomId: string | undefined) => {
    console.log(roomId)
  }

  const handleCreateRoom = (roomId: string | undefined) => {
    console.log(roomId)
  }

  return (
    <div className='w-full h-full flex justify-center items-center mb-[15rem]'>
				<div className='flex flex-col gap-16 p-12 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-solid border-2 border-secondary'>
          <h1 className='text-4xl font-bold text-center text-sub'>Live-Tac-Toe</h1>
          <div className="flex flex-col gap-4">
            <MenuCard title="Join a Room" placeholder='Room ID' submitText="Join" onSubmit={handleJoinRoom}/>
            <MenuCard title="Create a Room" placeholder='Room ID' submitText="Create" onSubmit={handleCreateRoom}/>
          </div>
        </div>
        <img className='w-screen absolute bottom-0 -z-1' src={WaveFooter} alt="Wave" />
    </div>
  )
}

export default Landing