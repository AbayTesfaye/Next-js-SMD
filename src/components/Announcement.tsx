const Announcement = () => {
  return (
    <div className='bg-white p-4 rounded-md mt-5'>
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="bg-schoolSkyLight flex flex-col p-4 rounded-md">
            <div className="flex justify-between items-center">
                <h1 className="font-medium">Lorem ipsum dolor sit</h1>
                <span className="bg-white rounded-md text-gray-400 p-1 text-xs">2025-01-01</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="bg-schoolPurpleLight flex flex-col p-4 rounded-md">
            <div className="flex justify-between items-center">
                <h1 className="font-medium">Lorem ipsum dolor sit</h1>
                <span className="bg-white rounded-md text-gray-400 p-1 text-xs">2025-01-01</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="bg-schoolYellowLight flex flex-col p-4 rounded-md">
            <div className="flex justify-between items-center">
                <h1 className="font-medium">Lorem ipsum dolor sit</h1>
                <span className="bg-white rounded-md text-gray-400 p-1 text-xs">2025-01-01</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
    </div>
  )
}

export default Announcement