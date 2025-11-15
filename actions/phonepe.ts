export async function initiatePhonePePayment(amount: number, userId: string) {
  console.log("Getting Auth");
  const auth = await getPhonePeAuth();

  const requestHeaders = {
    "Content-Type": "application/json",
    Authorization: `O-Bearer ${auth.access_token}`,
  };
  const body = {
    merchantOrderId: "TX123456",
    amount: amount * 100,
    expireAfter: 1200,
    metaInfo: {
      userId: userId,
    },
    paymentFlow: {
      type: "PG_CHECKOUT",
      message: "Payment message used for collect requests",
      merchantUrls: {
        redirectUrl: process.env.NEXT_PUBLIC_APP_URL,
      },
    },
  };

  const options = {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(body),
  };

  if (!process.env.PHONEPE_ENDPOINT)
    return { ok: false, message: "PhonePe endpoint not set" };

  const url = `${process.env.PHONEPE_ENDPOINT}checkout/v2/pay`;

  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return data;
}

const getPhonePeAuth = async () => {
  try {
    if (!process.env.PHONEPE_ENDPOINT)
      return { ok: false, message: "PhonePe endpoint not set" };

    if (!process.env.PHONEPE_CLIENT_ID)
      return { ok: false, message: "PhonePe client ID not set" };

    if (!process.env.PHONEPE_CLIENT_SECRET)
      return { ok: false, message: "PhonePe client secret not set" };

    const url = `${process.env.PHONEPE_ENDPOINT}v1/oauth/token`;

    const requestHeaders = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const requestBodyJson = {
      client_version: "1",
      grant_type: "client_credentials",
      client_id: process.env.PHONEPE_CLIENT_ID,
      client_secret: process.env.PHONEPE_CLIENT_SECRET,
    };

    const requestBody = new URLSearchParams(requestBodyJson).toString();

    const options = {
      method: "POST",
      headers: requestHeaders,
      body: requestBody,
    };

    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error("Error fetching PhonePe auth:", error);
  }
};
