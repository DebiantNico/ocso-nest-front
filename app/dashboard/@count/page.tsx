import axios from "axios";
import { cookies, headers } from "next/headers";
import { TOKEN_NAME } from "../../../../ocso-project/src/auth/constants/jwt.constants";
const CountPage = async () => {
    const userCookies = cookies()
    const token = userCookies.get(TOKEN_NAME) ?.value
    const countLocations = await axios.get("http://localhost:4000/locations", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    const cantidad = countLocations?.data?.length;
    return `Hay: ${cantidad} tienda${cantidad > 1 ? "s" : ""}`;
}

export default CountPage;