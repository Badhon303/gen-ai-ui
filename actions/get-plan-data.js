import urlJoin from "url-join"
// import { getSession } from "@/utils/get-session"

const url = process.env.NEXT_PUBLIC_BASE_URL

export async function getPlanDataData() {
  //   const session = await getSession()
  const apiUrl = urlJoin(
    url,
    "/api/subscription-plans?populate=*&sort=price:asc"
  )
  //   if (!session) {
  //     console.error("Session is null or undefined")
  //     return null
  //   }
  try {
    const data = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${session.jwt}`,
      },
    })
    if (data.ok) {
      const parsedData = await data.json()
      if (!parsedData) {
        return null
      }
      if (
        Number(parsedData?.meta?.pagination?.total) > 200 &&
        Number(parsedData?.meta?.pagination?.total) < 2001
      ) {
        const apiUrl = urlJoin(
          url,
          `/api/subscription-plans?pagination[pageSize]=${parsedData?.meta?.pagination?.total}&pagination[page]=1`
        )
        try {
          const data = await fetch(apiUrl, {
            headers: {
              "Content-Type": "application/json",
              //   Authorization: `Bearer ${session.jwt}`,
            },
          })
          if (data.ok) {
            const parsedData = await data.json()
            if (!parsedData) {
              return null
            }
            // console.log("total: ", parsedData?.meta?.pagination?.total)
            return parsedData
          } else {
            console.error(
              "GET /api/subscription-plans failed with status",
              data.status
            )
          }
        } catch (error) {
          // console.error("GET /api/product-types ", error)
          throw new Error("Need to reconsider about page size, its too high.")
        }
      }
      return parsedData
    } else {
      console.error(
        "GET /api/subscription-plans failed with status",
        data.status
      )
    }
  } catch (error) {
    // console.error("GET /api/product-types ", error)
    throw new Error(`GET /api/subscription-plans ${error}`)
  }
}
