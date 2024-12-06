import { getJobs } from "@/api/apiJobs";
import { useSession } from "@clerk/clerk-react";
import { useEffect } from "react";


const JobListing = () => {

const {session} = useSession();

const fetchJobs = async () => {
  const supabaseAccessToken = await session.getToken({
    template:"supabase",
  });
  console.log("Supabase access",supabaseAccessToken)
 const data = await getJobs(supabaseAccessToken);
 console.log(data);
 
};

useEffect(()=>{
 fetchJobs();
},[]);

  return (
    <div>job-listing</div>
  )
}

export default JobListing;