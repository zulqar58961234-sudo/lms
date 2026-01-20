
import {
  User,
  Mail,
  Lock,
  Monitor,
  ShieldCheck,
  Pencil,
} from "lucide-react";
import NavBar from "../components/Navbar";
import Link from "next/link";
import ReadLogin from "../actions/readlogin";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "../components/footer";

export default async function ProfilePage() {
    const data = await ReadLogin()
  return (
    <section className="h-full w-full overflow-x-hidden scroll-smooth">
      <title>Account - Skill Verge</title>
      <div>
          <NavBar/>
        <div className="relative w-full h-[450px] bg-black flex items-center justify-center text-center overflow-hidden">     
         <div className="absolute inset-0 bg-cover bg-center h-[450px] clip-angled bg-[url('/ml.jpg')] mt-15"></div>
          <div className="absolute inset-0 bg-black/70"></div>
           <ParticlesBackground/>
            <div className="relative z-10 text-white">
             <h1 className="text-5xl font-bold">* Account Overview *</h1>
              <p className="mt-2 text-sm"><Link href="/home">Home</Link> / Account</p>
               </div>
                </div>
                 </div>
      <div className=" pt-24">
        <div className="mx-auto max-w-6xl px-6">

          {/* TOP BAR */}
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                <span className="text-red-600">Account</span> Overview
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                View and manage your account details
              </p>
            </div>

            
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 gap-14 md:grid-cols-3">

            {/* LEFT – USER INFO */}
            {data.map((item)=>
                
            <section  key={item.id} className="md:col-span-2">
               
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Personal Information
              </h2>

              <InfoRow
                icon={<User size={18} />}
                label="Full Name"
                value={item.name}
              />

              <InfoRow
                icon={<Mail size={18} />}
                label="Email Address"
                value={item.email}
              />

              <InfoRow
                icon={<Lock size={18} />}
                label="Password"
                value={item.password}
              />
              <Link
              href={`update/${item.id}`}
              className="flex items-center w-30 p-3 mt-10 ml-150 gap-2 rounded-lg bg-red-500 text-sm font-medium text-white transition hover:bg-gray-700 duration-300"
            >
              <Pencil size={16} />
              Edit Info
            </Link>
            </section>
            )}

            {/* RIGHT – PLATFORM */}
            <aside className="space-y-10">
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Platform
                </h2>

                <StatBox
                  icon={<Monitor size={20} />}
                  title="Learning System"
                  value="SkillVerge LMS"
                />
              </div>

              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Security
                </h2>

                <StatBox
                  icon={<ShieldCheck size={20} />}
                  title="Privacy Status"
                  value="Private & Secure Account"
                />
              </div>
            </aside>
          </div>

          {/* FOOT NOTE */}
          <p className="mt-16 max-w-3xl text-sm font-semibold text-gray-500">
            SkillVerge is a modern learning management platform designed with
            enterprise-level security. Your personal data remains protected
            and is never shared without permission.
          </p>
        </div>
      </div>
      <div className="pt-38">
        <Footer/>
      </div>
    </section>
  );
}

/* ===================== COMPONENTS ===================== */

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 border-b py-5">
      <span className="text-gray-400">{icon}</span>

      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="mt-1 text-sm font-semibold text-gray-900">
          {value}
        </p>
      </div>
    </div>
  );
}

function StatBox({ icon, title, value }) {
  return (
    <div className="rounded-xl bg-white px-6 py-5 shadow-sm">
      <div className="flex items-center gap-3 text-gray-400">
        {icon}
        <span className="text-xs font-medium uppercase">{title}</span>
      </div>

      <p className="mt-3 text-sm font-semibold text-gray-900">{value}</p>
    </div>
  );
}
