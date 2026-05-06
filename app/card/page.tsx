export default function card () {
    return(
        <div className="bg-purple-200 h-screen">
            <div className="flex justify-center">
                {/* Card 1 */}
                <div className="bg-white rounded-md h-65 w-55 flex justify-center pt-3 shadow-sm hover:shadow-md transition">
                    <div className="bg-blue-200 rounded-md h-50 w-50 p-5 gap-3">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-black font-bold">Web Design</h1>
                            <p className="text-black">Craft enganging, user-friendly Websites</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <p className="bg-blue-300 rounded-2xl w-15 text-{11px} text-black h-5 w-25 flex-justify-center">Landing Page</p>
                            <p className="bg-blue-300 rounded-2xl w-15 text-{11px} text-black h-5 w-25 flex-justify-center">Website</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}