import AdminSidebar from "./AdminSidebar"
import AdminHeader from "./AdminHeader"

const AdmindLayout = () => {

      return (
            <div className=" lg:h-screen w-full grid grid-cols-1 lg:grid-cols-[20%_80%] ">
                  <div className="p-4 lg:border-r lg:border-gray-400">
                        <AdminSidebar />
                  </div>
                  <AdminHeader />
            </div>
      )
}

export default AdmindLayout