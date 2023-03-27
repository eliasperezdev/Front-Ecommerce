
import Sidebar from './Sidebar'
export default function LayoutAdmin({children}) {
    return (
        <>
            <div className="flex bg-gray-300">
                <Sidebar/>
                <div className='container mx-auto p-12'>
                    {children}

                </div>
            </div>

            
        </>
    );
}
