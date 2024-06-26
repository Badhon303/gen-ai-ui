import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  const cookieStore = cookies()
  cookieStore.delete("accessToken")

  return NextResponse.json({
    status: 200,
    message: "Logged Out",
  })
}
