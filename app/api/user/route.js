export async function CreateUser(data) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-tenant': 'www',
      },
      body: JSON.stringify(data),
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }