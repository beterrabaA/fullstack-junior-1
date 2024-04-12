import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, age, phone, state, city } = body;

    if(!name) return new NextResponse('Name is required', { status: 400 })
    if(!age) return new NextResponse('Age is required', { status: 400 })
    if(!phone) return new NextResponse('Phone is required', { status: 400 })
    if(!state) return new NextResponse('State is required', { status: 400 })
    if(!city) return new NextResponse('City is required', { status: 400 })

    return NextResponse.json({
      message: `Thank you for your application, ${name}`,
    });
  } catch (error) {
    console.log('[JOB_POST]', error)
    return NextResponse.json({message:'Something went wrong!'}, { status: 500 })
  }
}
