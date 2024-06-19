import { API_URL } from "@/config/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const saveResult = async (route, scannedCode, data, mutate, text, errorMsg) => {
  console.log(route, scannedCode, data, mutate, text, errorMsg)
  try {
    const response = await fetch(`${API_URL}/api/${route}/${scannedCode}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      if (typeof mutate === "function") {
        mutate();
      }
      text && toast.success(text);
      return response;
    } else {
      errorMsg && toast.error(errorMsg);
      console.error("Failed to save the result.");
      return response;
    }
  } catch (error) {
    console.error("Error while saving the result:", error);
  }
};
