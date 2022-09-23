import axios from "axios";

const URL =
  "https://script.googleusercontent.com/macros/echo?user_content_key=lYEYNcSksbDdrkwE0NhtqRtXBniVCgxKnplSKD6GkpjghVlNJ7zHQ3w3ESlyr17kdw6GkQXBskfr6WhoaJIeMyWDe8HGB_t5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKuoMSHKt2bp8-oNLxxPtye1UqoWBtnQXFlkdjM9_Ol6dULO-2Eal2v9v0_fKWcku0qGnr7jjra32iRUWzmzQbrDPK43L_mhyw&libMYbrfDt5zAmtcGqCsJSb-1c1XrfRO61GJ";

export const listApi = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
