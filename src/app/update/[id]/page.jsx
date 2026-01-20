import EditProfilePage from "@/app/editprofile/page";
import GetId from "@/app/actions/update";
import { notFound } from "next/navigation";

export default async function SingleData({ params }) {
  const { id } = await params;   // ✅ IMPORTANT FIX

  if (!id) {
    notFound();
  }

  const data = await GetId(id);

  if (!data) {
    notFound();
  }

  return <EditProfilePage data={data} />;
}
