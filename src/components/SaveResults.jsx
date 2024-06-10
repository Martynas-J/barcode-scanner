import { API_URL } from "@/config/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const saveResult = async (scannedCode, value, mutate, text) => {
  try {
    const response = await fetch(`${API_URL}/api/saveResult/${scannedCode}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemValue: value }),
    });

    if (response.ok) {
      if (typeof mutate === "function") {
        mutate();
      }
      toast.success(text);
      return response;
    } else {
      toast.error("tokios prekės nėra");
      console.error("Failed to save the result.");
      return response;
    }
  } catch (error) {
    console.error("Error while saving the result:", error);
  }
};
