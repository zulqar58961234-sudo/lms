import Link from "next/link";
import ReadData from "../actions/read";

export default async function Dashboard() {
  const data = await ReadData();

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Top Header */}
      <div className="bg-white shadow px-8 py-5 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Student Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Track your learning & manage your account
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/courses"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
          >
            Enroll Now
          </Link>

          <Link
            href="/student/profile"
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Edit Profile
          </Link>
        </div>
      </div>

      {/* Courses Section */}
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          My Enrolled Courses
        </h2>

        {data.length === 0 ? (
          <p className="text-gray-500">No courses enrolled yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => {
              const courseRoute =
                item.course === "Web Development"
                  ? "/web"
                  : item.course === "Graphics Desigining"
                  ? "/graphic"
                  : item.course === "Basic IT"
                  ? "/it"
                  : "/dashboard";

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow hover:shadow-xl transition"
                >
                  <div className="h-40 bg-gray-200 rounded-t-2xl flex items-center justify-center">
                    <img
                      src={item.image}
                      alt="course"
                      className="h-full w-full object-cover rounded-t-2xl"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.course}
                    </h3>

                    <p className="text-sm text-gray-500 mb-3">
                      Student: {item.user?.name}
                    </p>

                    <div className="flex gap-3">
                      <Link
                        href={courseRoute}
                        className="flex-1 text-center bg-black text-white py-2 rounded-lg hover:bg-gray-900"
                      >
                        View
                      </Link>

                      <Link
                        href={`/course/end/${item.id}`}
                        className="flex-1 text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                      >
                        End Course
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
