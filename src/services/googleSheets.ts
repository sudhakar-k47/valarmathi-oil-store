
import { toast } from "../components/ui/use-toast";

export type OrderFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
  totalAmount: number;
};

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
};

/**
 * Submit order data to Google Sheets using a webhook URL
 */
export const submitOrderToGoogleSheets = async (formData: OrderFormData, webhookUrl: string): Promise<boolean> => {
  try {
    if (!webhookUrl) {
      console.error("Google Sheets webhook URL is not configured");
      return false;
    }

    const itemsText = formData.items.map(item => 
      `${item.name} (${item.quantity} x $${item.price.toFixed(2)})`
    ).join(", ");

    const response = await fetch(webhookUrl, {
      method: "POST",
      mode: "no-cors", // This is needed for Google Sheets webhook
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        items: itemsText,
        total: formData.totalAmount.toFixed(2),
        date: new Date().toISOString(),
      }),
    });

    console.log("Order submitted successfully", response);
    return true;
  } catch (error) {
    console.error("Error submitting order to Google Sheets:", error);
    return false;
  }
};

/**
 * Submit contact form data to Google Sheets using a webhook URL
 */
export const submitContactToGoogleSheets = async (formData: ContactFormData, webhookUrl: string): Promise<boolean> => {
  try {
    if (!webhookUrl) {
      console.error("Google Sheets webhook URL is not configured");
      return false;
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      mode: "no-cors", // This is needed for Google Sheets webhook
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        date: formData.date,
      }),
    });

    console.log("Contact form submitted successfully", response);
    return true;
  } catch (error) {
    console.error("Error submitting contact form to Google Sheets:", error);
    return false;
  }
};
