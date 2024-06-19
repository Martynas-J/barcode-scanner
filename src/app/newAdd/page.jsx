"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@/components/Form";
import React, { Suspense } from "react";
import { FromDb } from "@/Functions/simpleFunctions";
import Loading from "@/components/Loading/Loading";
import { saveResult } from "@/components/SaveResults";
import { useSession } from "next-auth/react";

const NewAdd = () => {
  const { result, isLoading, mutate } = FromDb(`getResults`);
  const router = useRouter();
  const { data } = useSession();
  const userName = data?.user?.name;

  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const dataToEdit = searchParams.get("data");
  const parsedData = JSON.parse(dataToEdit);
  const onSubmit = (data) => {
    saveResult(
      `saveResult/${parsedData ? parsedData.code : code}`,
      { printer: data.printer, itemName: data.name, itemValue: data.value },
      mutate,
      parsedData ? "Redaguota" : "Pridėta nauja",
      parsedData ? "Klaida redaguojant" : "Pavadinimas jau naudojamas"
    );
    const sum = data.value - result.itemValue;
    saveResult("saveStatistics", parsedData ? { user: userName, count: sum, action: sum > 0 ? "Pridėta" : sum < 0 ? "Išimta" : "Redaguota" } : { user: userName, count: data.value, action: "Nauja" })
    router.push("/materials");
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="text-2xl font-bold text-center pb-2">Nauja prekė</div>
      <p>
        Prekės kodas:{" "}
        <span className="text-red-600">
          {parsedData ? parsedData.code : code}
        </span>
      </p>
      <Form onSubmit={onSubmit} parsedData={parsedData} />
    </div>
  );
};

const NewAddPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <NewAdd />
  </Suspense>
);

export default NewAddPage;
