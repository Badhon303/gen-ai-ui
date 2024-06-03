import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import { getSession } from "@/utils/get-session"

const url = process.env.NEXT_PUBLIC_BASE_URL

export async function POST(req) {
  const body = await req.json()
  function updateSession(session, jwt, user, isLoggedIn) {
    session.jwt = jwt
    session.user = user
    session.isLoggedIn = isLoggedIn
  }
  try {
    const response = await fetch(`${url}/api/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: body.email,
        username: body.username,
        password: body.password,
      }),
    })
    const resJson = await response.json()
    if (resJson.jwt) {
      cookies().set("accessToken", resJson.jwt, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60,
      })
      const session = await getSession()
      updateSession(session, resJson.jwt, resJson.user, true)
      await session.save()
    } else {
      return NextResponse.json(resJson)
    }
    return NextResponse.json({
      success: "Successfully Registered",
    })
  } catch (error) {
    return NextResponse.json({
      error: error,
    })
  }
}
