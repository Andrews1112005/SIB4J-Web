export default function Sidebar()
{
    return(
        <div className="bg-black flex justify-center h-screen items-center">
            <div className="bg-gray-300 rounded-2xl h-100 w-100 ">
                <div className="flex flex-row items-center gap-4 p-4">
                    <div className="">
                        <img src="logo spext.png" className="h-50" />
                    </div>
                    <div>
                        <h2 className="text-white font-bold">Acme inc</h2>
                        <p className="text-gray">Enterprise</p>
                    </div>
                    <div className="pt-2">
                        <img src="/selector.svg" className="h-10"/>
                    </div>
                </div>
                <div>
                    <img className="flex" src="terminal-2.svg" />
                    <h2>Playground</h2>
                </div>
            </div>
        </div>
    );
}