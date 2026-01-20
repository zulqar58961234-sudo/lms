 import Link from "next/link";
import ReadData from "../actions/read";
import Image from "next/image";
import DashboardNavbar from "../components/dashnav";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "../components/footer";
import EndCourse from "../components/deletecourse";

export default async function Dashboard() {
const data = await ReadData();

  return (
    <section className="h-full  w-full overflow-x-hidden scroll-smooth ">
      <title>Student DashBoard - Skill Verge</title>
      {/* ===== Header ===== */}
       <div>
           <DashboardNavbar/>
         <div className="relative w-full h-[450px] bg-black flex items-center justify-center text-center overflow-hidden">     
          <div className="absolute inset-0 bg-cover bg-center h-[450px] clip-angled bg-[url('/dash.jpg')]"></div>
           <div className="absolute inset-0 bg-black/70"></div>
            <ParticlesBackground/>
             <div className="relative z-10 text-white">
              <h1 className="text-5xl font-bold">* DashBoard *</h1>
               <p className="mt-2 text-sm"><Link href="/home">Home</Link> / Dashboard</p>
                </div>
                 </div>
                  </div>
                   {/* Accent Line */}
      <div className="mb-6 h-1 w-50 ml-141 mt-20 rounded-full bg-red-600"></div>
<h2 className="text-3xl font-serif mt-10 font-bold text-gray-900 mb-4 text-center">
  <span  className="text-yellow-500">(</span>  Welcome to your Learning Management Dashboard <span className="text-yellow-500">)</span>
    </h2>
      <p className="text-gray-600 text-center font-semibold mt-9 text-lg max-w-4xl mx-auto leading-relaxed">
        {" "}
          <span className="font-semibold font-serif text-md text-red-500">
            From here
              </span>
               , you can easily access all your enrolled courses, view detailed course content, and track your progress in real time. Each course is structured to guide you step by step, helping you understand concepts clearly and move forward with confidence. Whether you are starting a new course or continuing an existing one, the dashboard keeps everything in one place for your convenience.

The dashboard also helps you stay motivated by showing your learning milestones, completed lessons, and upcoming tasks. Progress indicators allow you to see how far you have come and what remains, making it easier to plan your study time effectively. With clear visuals and organized sections, you can manage your learning schedule efficiently and stay consistent.
                   </p>
      {/* ===== Courses ===== */}
      <div className="mx-auto max-w-7xl mt-6 rounded-xl shadow-2xl px-10 py-10">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          My Enrolled Courses
        </h2>

        {data.length === 0 ? (
          <div className="rounded-xl font-bold p-6 text-gray-500 shadow">
            No courses enrolled yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => {
              const courseRoute =
                item.course === "Web Development"
                  ? "/web"
                  : item.course === "Graphic Designing"
                  ? "/graphic"
                  : item.course === "Basic IT"
                  ? "/basicit"
                  : item.course === "Video Editing"
                  ? "/videoediting"
                  : "/dashboard";

              return (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* ===== Course Image ===== */}
                  <div className="relative h-48 w-full">
                    <Image
                      src="/video.webp"
                      alt={item.course}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* ===== Content ===== */}
                  <div className="relative p-5">
                    {/* Student Info */}
                    <div className="-mt-10 mb-3 flex items-center gap-3">
                      <div className="h-17 w-17 overflow-hidden rounded-full border-4 border-white bg-gray-200">
                        <Image
                          src={item.image}
                          alt=""
                          width={56}
                          height={56}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div>
                        <p className="text-xl text-gray-800 mt-2 font-bold">{item.name}</p>
                        <p className="font-semibold text-xs text-red-600">
                          Student
                        </p>
                      </div>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {item.course}
                    </h3>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href={courseRoute}
                        className="flex-1 rounded-xl bg-black py-2.5 text-center text-sm font-semibold text-white hover:bg-gray-900"
                      >
                        View
                      </Link>

                      <Link
                        href={`/editdashboard/${item.id}`}
                        className="flex-1 rounded-xl bg-red-600 py-2.5 text-center text-sm font-semibold text-white hover:bg-red-700"
                      >
                        Edit Info
                      </Link>
                     
                    </div>
                     <EndCourse id={item.id}/>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="mt-10">
        < Footer/>
      </div>
    </section>
  );
}
