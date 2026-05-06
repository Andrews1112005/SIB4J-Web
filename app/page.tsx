// app/page.tsx (Next.js 13+ with Tailwind CSS + TypeScript)

export default function Task2page() {
  return (
    <div className="bg-white h-screen flex flex-col text-blue-950 gap-4 p-8">
      
      {/* bagian atas */}
      <div className="flex flex-row gap-4 flex justify-center">
        {/* design Adobe Photoshop */}
          <div className="relative bg-blue-100 h-72 w-96 p-8 flex flex-col justify-between rounded-3xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <img src="/palette.svg" alt="Icon Palette" className="w-6 h-6" />
              <p className="text-gray-600">Design</p>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Adobe Photoshop
              </h1>
              <p className="text-gray-600 mt-1 font-bold">in 3 days</p>
            </div>

            {/* Avatar bawah kanan */}
            <div className="absolute bottom-4 right-4 flex -space-x-2">
              <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full border-2 border-white" />
              <div className="w-8 h-8 flex items-center justify-center text-xs bg-white rounded-full border">
                +3
              </div>
            </div>
        </div>

        {/* design AI */}
        <div className="relative bg-green-100 h-72 w-96 p-8 flex flex-col justify-between rounded-3xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-4">
            <img src="/brand-tabler.svg" alt="Icon Palette" className="w-6 h-6" />
            <p className="text-gray-600">AI</p>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800 leading-snug">
              DALL·E 2, Midjourney, Stable Diffusion
            </h1>
            <p className="text-gray-600 mt-1 font-bold">in 5 days</p>
          </div>

          {/* Avatar kanan bawah */}
          <div className="absolute bottom-4 right-4 flex -space-x-2">
            <img src="https://i.pravatar.cc/40?img=4" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/40?img=5" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/40?img=6" className="w-8 h-8 rounded-full border-2 border-white" />
            <div className="w-8 h-8 flex items-center justify-center text-xs bg-white rounded-full border">
              +2
            </div>
          </div>
        </div>
      </div>

      {/* bagian bawah */}
      <div className="flex gap-4 justify-center">
          {/* design Figma */}
          <div className="bg-purple-100 h-60 w-66 p-4 flex flex-col justify-between rounded-3xl shadow-sm hover:shadow-md transition">
            <div className="flex gap-4 m-3">
              <img src="/palette.svg" alt="Icon Palette" className="w-6 h-6" />
              <p className="text-gray-600">Design</p>
            </div>

            <div className="m-3">
              <h1 className="text-2xl font-bold text-gray-800">Figma</h1>
              <p className="text-gray-600 mt-1 font-bold">8 hours ago</p>
            </div>
          </div>

          {/* design Python */}
          <div className="bg-orange-100 h-60 w-66 p-4 flex flex-col justify-between rounded-3xl shadow-sm hover:shadow-md transition">
            <div className="flex gap-4 m-3">
              <img src="/code.svg" alt="Icon Palette" className="w-6 h-6" />
              <p className="text-gray-600">Coding</p>
            </div>

            <div className="m-3">
              <h1 className="text-2xl font-bold text-gray-800">Python</h1>
              <p className="text-gray-600 mt-1 font-bold">2 days ago</p>
            </div>
          </div>

          {/* design Sketch */}
          <div className="bg-pink-100 h-60 w-66 p-4 flex flex-col justify-between rounded-3xl shadow-sm hover:shadow-md transition">
            <div className="flex gap-4 m-3">
              <img src="/palette.svg" alt="Icon Palette" className="w-6 h-6" />
              <p className="text-gray-600">Design</p>
            </div>

            <div className="m-3">
              <h1 className="text-2xl font-bold text-gray-800">Sketch</h1>
              <p className="text-gray-600 mt-1 font-bold">4 days ago</p>
            </div>
         </div>
      </div>

    </div>
  );
}
