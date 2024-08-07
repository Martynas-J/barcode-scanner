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
  const onSubmit = async (data) => {
    try {
      const result1 = await saveResult(
        `saveResult/${parsedData ? parsedData.code : code}`,
        { printer: data.printer, itemName: data.name, itemValue: data.value },
        "",
        parsedData ? "Redaguota" : "Pridėta nauja",
        parsedData ? "Klaida redaguojant" : "Pavadinimas jau naudojamas"
      );
      if (!result1.ok) {
        return false;
      }

      let action = "Nauja";
      let count = data.value;
      const existingItem = result?.find(
        (item) => item.code === parsedData?.code
      );
      let model = data.name;

      if (parsedData) {
        const sum = data.value - existingItem?.itemValue;
        action = sum > 0 ? "Pridėta" : sum < 0 ? "Išimta" : "Redaguota";
        count = sum;
        model = existingItem.itemName;
      }

      const result2 = await saveResult("saveStatistics", {
        user: userName,
        model,
        count,
        action,
      });

      if (!result2.ok) {
        return false;
      }

      router.push("/#");
      return true;
    } catch (error) {
      console.error("Error in onSubmit:", error);
    }
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
