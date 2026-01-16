const SUPABASE_URL = "https://rqidgeittsjkpkykmdrz.supabase.co";

export interface SubmitResult {
  success: boolean;
  error?: string;
}

export async function submitSignup(data: {
  name: string;
  email: string;
  organization: string;
}): Promise<SubmitResult> {
  try {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/form-submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "signup",
        ...data,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, error: result.error || "Submission failed" };
    }

    return { success: true };
  } catch (error) {
    console.error("Signup error:", error);
    return { success: false, error: "Network error. Please try again." };
  }
}

export async function submitContact(data: {
  name: string;
  email: string;
  objective: string;
  message?: string;
}): Promise<SubmitResult> {
  try {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/form-submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "contact",
        ...data,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, error: result.error || "Submission failed" };
    }

    return { success: true };
  } catch (error) {
    console.error("Contact error:", error);
    return { success: false, error: "Network error. Please try again." };
  }
}
