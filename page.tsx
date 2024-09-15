import Index from "../components/dashboard/index";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";



export const metadata: Metadata = {
  title:
    "Protein Bind: a leading reasearch plaform for drug discovery",
  description: "this is description for protein bind",
};

export default function Home() {
  return (
    <>


      <DefaultLayout>
        <Index />
      </DefaultLayout>
    
    </>
  );
}
