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

  const url = "https://api-preprod.phonepe.com/apis/pg-sandbox/checkout/v2/pay";

  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return data;

  // const response = await fetch("https://api.phonepe.com/v1/payments", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Authorization": `Bearer ${process.env.PHONEPE_API_KEY}`
  //   },
  //   body: JSON.stringify({
  //     amount,
  //     userId,
  //     callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/phonepe/callback`
  //   })
  // });

  console.log(auth);
  return { auth: auth };
}

const getPhonePeAuth = async () => {
  try {
    const url =
      "https://api-preprod.phonepe.com/apis/pg-sandbox/v1/oauth/token";

    const requestHeaders = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const requestBodyJson = {
      client_version: "1",
      grant_type: "client_credentials",
      client_id: "TEST-M23ZNHB6SJPW1_25110",
      client_secret: "ZmE1ZDBiNTktNmE0Mi00NmExLTliZTEtMTA1Y2Q5YzEwYThm",
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
